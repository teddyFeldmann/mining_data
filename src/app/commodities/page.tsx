import Link from "next/link";
import { DataTable, type Column } from "@/components/DataTable";
import { getCommodityCounts } from "@/data/fetchCommodities";

type Row = { name: string; count: number; slug: string };

export const revalidate = 60;

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
