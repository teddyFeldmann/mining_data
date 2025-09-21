// src/app/companies/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { mines } from "../../../../data/mines";
import { companySlug, formatPercent } from "../../../utils/utils";
import { DataTable, type Column } from "../../../components/DataTable";

// Build a slug → company-name(s) index from the data
const allCompanyNames = Array.from(
  new Set(mines.flatMap((m) => m.ownership.map((o) => o.owner.name)))
);

const slugToNames = new Map<string, string[]>();
for (const n of allCompanyNames) {
  const s = companySlug(n);
  const arr = slugToNames.get(s) ?? [];
  arr.push(n);
  slugToNames.set(s, arr);
}

// Pre-render a page for each company
export function generateStaticParams() {
  return Array.from(slugToNames.keys()).map((slug) => ({ slug }));
}

type Row = { mine: (typeof mines)[number]; percent: number };

const columns: Column<Row>[] = [
  { header: "Mine",      cell: (r) => <strong>{r.mine.name}</strong> },
  { header: "Location",  cell: (r) => r.mine.location },
  { header: "Commodity", cell: (r) => r.mine.commodity.join(", ") },
  { header: "Stake",     cell: (r) => formatPercent(r.percent) },
  { header: "Stage", cell: (r) => r.mine.stage },
];

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const names = slugToNames.get(params.slug) ?? [];
  if (!names.length) return notFound();

  const displayName = names[0];

  const rows: Row[] = mines
    .map((m) => {
      const entry = m.ownership.find((o) => names.includes(o.owner.name));
      return entry ? { mine: m, percent: entry.ownership } : null;
    })
    .filter(Boolean) as Row[];

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{displayName} — Mines</h1>
        <Link href="/" className="text-sm underline hover:no-underline">
          ← Back to all mines
        </Link>
      </div>

      <DataTable columns={columns} data={rows} getRowKey={(r) => r.mine.name} />
    </main>
  );
}
