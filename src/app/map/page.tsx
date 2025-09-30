"use client";

import MinesMap from "@/components/MinesMap";
import { mines } from "../../../data/mines"; // adjust path if needed

export default function MapPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Map</h1>
      <MinesMap mines={mines} />
    </section>
  );
}