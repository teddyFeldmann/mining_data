import dynamic from "next/dynamic";
import { mines } from "../../../data/mines";

const MinesMap = dynamic(() => import("@/components/MinesMap"), {
  ssr: false,
  loading: () => <div className="h-[70vh] grid place-items-center">Loading map…</div>,
});

export default function MapPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Map</h1>
      <MinesMap mines={mines} />
    </section>
  );
}
