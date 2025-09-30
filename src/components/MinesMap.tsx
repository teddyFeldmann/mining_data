// src/components/MinesMap.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayersControl,
} from "react-leaflet";
import type { Mine } from "../../data/interfaces";
import { mineSlug } from "@/utils/utils";
import L from "leaflet";

// Use icons from /public to avoid any-casts and bundler issues
const DefaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 3 });
    } else {
      map.setView([20, 0], 2);
    }
  }, [map, points]);
  return null;
}

export default function MinesMap({ mines }: { mines: Mine[] }) {
  const points = useMemo(
    () =>
      mines
        .filter((m) => typeof m.lat === "number" && typeof m.lng === "number")
        .map((m) => [m.lat as number, m.lng as number] as [number, number]),
    [mines]
  );

  return (
    <div className="h-[70vh] w-full overflow-hidden rounded-xl">
      <MapContainer center={[20, 0]} zoom={2} minZoom={2} worldCopyJump className="h-full w-full">
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Streets (OSM)">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite (Esri)">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <FitBounds points={points} />

        {mines
          .filter((m) => typeof m.lat === "number" && typeof m.lng === "number")
          .map((m) => (
            <Marker key={m.name} position={[m.lat as number, m.lng as number]}>
              <Popup>
                <div className="space-y-1">
                  <div className="font-semibold">
                    <Link href={`/mines/${mineSlug(m.name)}`} className="underline hover:no-underline">
                      {m.name}
                    </Link>
                    {m.complex?.name ? <> ({m.complex.name})</> : null}
                  </div>
                  <div className="text-xs text-gray-700">{m.location}</div>
                  <div className="text-xs">{m.commodity?.join(", ")}</div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
