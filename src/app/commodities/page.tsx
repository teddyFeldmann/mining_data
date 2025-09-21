import Link from "next/link";
import { mines } from "../../../data/mines";
import { commoditySlug } from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";

type Row = { name: string; count: number; slug: string };

function getCommodityCounts(): Row[] {
  const map = new Map<string, number>();
  for (const m of mines) {
    for (const c of m.commodity) {
      map.set(c, (map.get(c) ?? 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count, slug: commoditySlug(name) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

const columns: Column<Row>[] = [
  {
    header: "Commodity",
    cell: (r) => (
      <Link href={`/commodities/${r.slug}`} className="underline hover:no-underline">
        {r.name}
      </Link>
    ),
  },
  { header: "Mines", cell: (r) => r.count.toString(), thClassName: "w-24" },
];

export default function CommoditiesIndexPage() {
  const rows = getCommodityCounts();
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Commodities</h1>
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.name} />
    </section>
  );
}
