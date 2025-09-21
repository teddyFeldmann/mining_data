"use client";

import { mines } from "../../data/mines";

import { DataTable, type Column } from "../components/DataTable";
import { OwnershipInlineLinks } from "@/components/OwnershipInlineLinks";

type MineRow = (typeof mines)[number];


const columns: Column<MineRow>[] = [
  { header: "Mine",      cell: (m) => <strong>{m.name}</strong> },
  { header: "Location",  cell: (m) => m.location },
  { header: "Commodity", cell: (m) => m.commodity.join(", ") },
  { header: "Ownership", cell: (m) => <OwnershipInlineLinks owners={m.ownership} /> },
  { header: "Stage", cell: (m) => m.stage },
];

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mine Data</h1>
      <DataTable columns={columns} data={mines} getRowKey={(m) => m.name} />
    </main>
  );
}
