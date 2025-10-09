import MapClient from "./MapClient";
import { fetchMines } from "@/data/fetchMines";

export default async function MapPage() {
  const mines = await fetchMines();
  
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Map</h1>
      <MapClient mines={mines} />
    </section>
  );
}
