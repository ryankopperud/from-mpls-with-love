"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  geojson: GeoJSON.Feature;
  name: string;
}

export default function NeighborhoodMap({ geojson, name }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-93.265, 44.977],
      zoom: 12,
      interactive: true,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.AttributionControl({ compact: true }));

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      const m = map.current!;

      m.addSource("neighborhood", {
        type: "geojson",
        data: geojson as GeoJSON.GeoJSON,
      });

      m.addLayer({
        id: "neighborhood-fill",
        type: "fill",
        source: "neighborhood",
        paint: {
          "fill-color": "#2a9d8f",
          "fill-opacity": 0.35,
        },
      });

      m.addLayer({
        id: "neighborhood-border",
        type: "line",
        source: "neighborhood",
        paint: {
          "line-color": "#264653",
          "line-width": 2.5,
        },
      });

      // Fit to bounds
      const coords = geojson.geometry.type === "Polygon"
        ? (geojson.geometry as GeoJSON.Polygon).coordinates[0]
        : (geojson.geometry as GeoJSON.MultiPolygon).coordinates.flat(2);

      const bounds = new mapboxgl.LngLatBounds();
      for (const coord of coords) {
        bounds.extend(coord as [number, number]);
      }
      m.fitBounds(bounds, { padding: 60, maxZoom: 15 });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [geojson, name]);

  return <div ref={mapContainer} className="w-full h-full" />;
}
