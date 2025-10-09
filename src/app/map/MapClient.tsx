"use client";

import dynamic from "next/dynamic";
import type { Mine } from "../../data/interfaces";

const MinesMap = dynamic(() => import("@/components/MinesMap"), {
  ssr: false,
  loading: () => <div className="h-[70vh] grid place-items-center">Loading map…</div>,
});

export default function MapClient({ mines }: { mines: Mine[] }) {
  return <MinesMap mines={mines} />;
}
