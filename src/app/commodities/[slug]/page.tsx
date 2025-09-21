import Link from "next/link";
import { notFound } from "next/navigation";
import { mines } from "../../../../data/mines";
import { commoditySlug, formatOwnershipInline } from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";

const allCommodityNames = Array.from(new Set(mines.flatMap((m) => m.commodity)));

const slugToNames = new Map<string, string[]>();
for (const n of allCommodityNames) {
  const s = commoditySlug(n);
  const arr = slugToNames.get(s) ?? [];
  arr.push(n);
  slugToNames.set(s, arr);
}

export function generateStaticParams() {
  return Array.from(slugToNames.keys()).map((slug) => ({ slug }));
}

type Row = (typeof mines)[number];

const columns: Column<Row>[] = [
  { header: "Mine",      cell: (m) => <strong>{m.name}</strong> },
  { header: "Location",  cell: (m) => m.location },
  { header: "Commodity", cell: (m) => m.commodity.join(", ") },
  { header: "Stage",     cell: (m) => m.stage ?? "—" },
  { header: "Ownership", cell: (m) => formatOwnershipInline(m.ownership) },
];

export default function CommodityPage({ params }: { params: { slug: string } }) {
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
