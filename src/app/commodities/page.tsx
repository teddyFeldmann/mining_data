// src/app/commodities/page.tsx
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase";
import { commoditySlug } from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";

type MCRow = { commodity_name: string; mine_id: string };
type Row = { name: string; count: number; slug: string };

export const revalidate = 60; // or: export const dynamic = "force-dynamic";

async function getCommodityCounts(): Promise<Row[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("mine_commodities")
    .select("commodity_name, mine_id");

  if (error) throw error;

  // Count DISTINCT mines per commodity
  const byCommodity = new Map<string, Set<string>>();
  for (const r of (data ?? []) as MCRow[]) {
    if (!r.commodity_name || !r.mine_id) continue;
    const set = byCommodity.get(r.commodity_name) ?? new Set<string>();
    set.add(r.mine_id);
    byCommodity.set(r.commodity_name, set);
  }

  const rows: Row[] = Array.from(byCommodity.entries()).map(([name, set]) => ({
    name,
    count: set.size,
    slug: commoditySlug(name),
  }));

  // Sort: most mines first, then A→Z
  rows.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  return rows;
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

export default async function CommoditiesIndexPage() {
  const rows = await getCommodityCounts();
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Commodities</h1>
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.name} />
    </section>
  );
}
