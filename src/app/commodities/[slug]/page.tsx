// src/app/commodities/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable, type Column } from "@/components/DataTable";
import OwnershipCell from "@/components/OwnershipCell";
import { commoditySlug } from "@/utils/utils";
import { fetchMines } from "@/data/fetchMines";
import type { Mine } from "@/data/interfaces";

// build a slug -> names[] map from the current dataset
function buildSlugMap(mines: Mine[]) {
  const all = new Set(mines.flatMap((m) => m.commodity));
  const map = new Map<string, string[]>();
  for (const name of all) {
    const slug = commoditySlug(name);
    const arr = map.get(slug) ?? [];
    arr.push(name);
    map.set(slug, arr);
  }
  return map;
}

// You can make this async in App Router
export async function generateStaticParams() {
  const mines = await fetchMines();
  const slugToNames = buildSlugMap(mines);
  return Array.from(slugToNames.keys()).map((slug) => ({ slug }));
}

type Row = Mine;

const columns: Column<Row>[] = [
  { header: "Mine",      cell: (m) => <strong>{m.name}</strong> },
  { header: "Location",  cell: (m) => m.location },
  { header: "Commodity", cell: (m) => m.commodity.join(", ") },
  { header: "Stage",     cell: (m) => m.stage ?? "—" },
  { header: "Ownership", cell: (m) => <OwnershipCell mine={m} /> },
];

export default async function CommodityPage({ params }: { params: { slug: string } }) {
  const mines = await fetchMines();
  const slugToNames = buildSlugMap(mines);

  const names = slugToNames.get(params.slug) ?? [];
  if (!names.length) return notFound();

  const displayName = names[0];
  const rows = mines.filter((m) => m.commodity.some((c) => names.includes(c)));

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{displayName} — Mines</h1>
        <Link href="/commodities" className="text-sm underline hover:no-underline">
          ← Back to commodities
        </Link>
      </div>

      <DataTable columns={columns} data={rows} getRowKey={(m) => m.name} />
    </main>
  );
}
