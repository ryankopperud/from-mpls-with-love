import type { Metadata } from "next";
import MapView from "@/components/MapView";

export const metadata: Metadata = {
  title: "Explore Minneapolis Neighborhoods | From MPLS With Love",
  description:
    "Interactive map of all 87 Minneapolis neighborhoods. Click any neighborhood to learn more.",
  alternates: {
    canonical: "/map",
  },
};

export default function MapPage() {
  return (
    <main className="h-[calc(100vh-3.5rem)] relative">
      <MapView />
    </main>
  );
}
