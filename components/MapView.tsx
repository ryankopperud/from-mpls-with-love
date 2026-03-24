"use client";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const MINNEAPOLIS_CENTER: [number, number] = [-93.265, 44.977];
const MINNEAPOLIS_ZOOM = 11.5;

const NEIGHBORHOOD_COLORS = [
  "#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51",
  "#606c38", "#283618", "#dda15e", "#bc6c25", "#0077b6",
  "#023e8a", "#48cae4", "#90be6d", "#43aa8b", "#577590",
  "#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f",
];

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const popup = useRef<mapboxgl.Popup | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || token === "your_mapbox_token_here") {
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: MINNEAPOLIS_CENTER,
      zoom: MINNEAPOLIS_ZOOM,
      minZoom: 10,
      maxZoom: 16,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.AttributionControl({ compact: true }));

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    popup.current = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 10,
    });

    map.current.on("load", () => {
      const m = map.current!;

      m.addSource("neighborhoods", {
        type: "geojson",
        data: "/data/neighborhoods.geojson",
      });

      // Color each neighborhood by its BDNUM
      const colorExpression: mapboxgl.Expression = ["match", ["get", "BDNUM"]];
      for (let i = 1; i <= 100; i++) {
        colorExpression.push(i);
        colorExpression.push(NEIGHBORHOOD_COLORS[i % NEIGHBORHOOD_COLORS.length]);
      }
      colorExpression.push("#ccc"); // default

      m.addLayer({
        id: "neighborhoods-fill",
        type: "fill",
        source: "neighborhoods",
        paint: {
          "fill-color": colorExpression as unknown as string,
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.7,
            0.4,
          ],
        },
      });

      m.addLayer({
        id: "neighborhoods-border",
        type: "line",
        source: "neighborhoods",
        paint: {
          "line-color": "#1a1a2e",
          "line-width": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            2.5,
            1,
          ],
          "line-opacity": 0.8,
        },
      });

      let hoveredId: number | null = null;

      m.on("mousemove", "neighborhoods-fill", (e) => {
        if (!e.features || e.features.length === 0) return;
        m.getCanvas().style.cursor = "pointer";

        if (hoveredId !== null) {
          m.setFeatureState({ source: "neighborhoods", id: hoveredId }, { hover: false });
        }

        hoveredId = e.features[0].id as number;
        m.setFeatureState({ source: "neighborhoods", id: hoveredId }, { hover: true });

        const name = e.features[0].properties?.BDNAME || "";
        setHoveredName(name);

        popup.current!
          .setLngLat(e.lngLat)
          .setHTML(
            `<div style="font-family:Inter,system-ui,sans-serif;font-weight:900;font-size:11px;padding:6px 10px;color:#0a0a0a;letter-spacing:0.08em;text-transform:uppercase;">${name}</div>`
          )
          .addTo(m);
      });

      m.on("mouseleave", "neighborhoods-fill", () => {
        m.getCanvas().style.cursor = "";
        if (hoveredId !== null) {
          m.setFeatureState({ source: "neighborhoods", id: hoveredId }, { hover: false });
        }
        hoveredId = null;
        setHoveredName(null);
        popup.current!.remove();
      });

      m.on("click", "neighborhoods-fill", (e) => {
        if (!e.features || e.features.length === 0) return;
        const name = e.features[0].properties?.BDNAME;
        if (name) {
          router.push(`/neighborhoods/${slugify(name)}`);
        }
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [router]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      {(!process.env.NEXT_PUBLIC_MAPBOX_TOKEN || process.env.NEXT_PUBLIC_MAPBOX_TOKEN === "your_mapbox_token_here") && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-xl font-bold text-zinc-800 mb-2">Mapbox Token Required</h2>
            <p className="text-zinc-600">
              Add your Mapbox access token to <code className="bg-zinc-200 px-1 rounded">.env.local</code>:
            </p>
            <code className="block mt-2 bg-zinc-200 p-3 rounded text-sm text-left">
              NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
