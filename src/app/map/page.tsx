import MapClient from "./MapClient";
import { mines } from "../../../data/mines";

export default function MapPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Map</h1>
      <MapClient mines={mines} />
    </section>
  );
}
