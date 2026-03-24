import fs from "fs";
import path from "path";

export interface NeighborhoodProperties {
  OBJECTID: number;
  BDNAME: string;
  BDNUM: number;
  Shape__Area: number;
  Shape__Length: number;
}

export interface NeighborhoodFeature {
  type: "Feature";
  id: number;
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
  properties: NeighborhoodProperties;
}

export interface NeighborhoodCollection {
  type: "FeatureCollection";
  features: NeighborhoodFeature[];
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

let _cache: NeighborhoodCollection | null = null;

export function getNeighborhoods(): NeighborhoodCollection {
  if (!_cache) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "neighborhoods.geojson"
    );
    _cache = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  return _cache!;
}

export function getAllNeighborhoods(): NeighborhoodFeature[] {
  return getNeighborhoods().features;
}

export function getNeighborhoodBySlug(
  slug: string
): NeighborhoodFeature | undefined {
  return getAllNeighborhoods().find(
    (f) => slugify(f.properties.BDNAME) === slug
  );
}

export function getAllSlugs(): string[] {
  return getAllNeighborhoods().map((f) => slugify(f.properties.BDNAME));
}
