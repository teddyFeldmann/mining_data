import Link from "next/link";
import { mines } from "../../../data/mines";
import { companySlug } from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";

type Row = { name: string; count: number; slug: string };

function getCompanyCounts(): Row[] {
  const map = new Map<string, number>();
  for (const m of mines) {
    for (const o of m.ownership) {
      const name = o.owner.name;
      map.set(name, (map.get(name) ?? 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count, slug: companySlug(name) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

const columns: Column<Row>[] = [
  {
    header: "Company",
    cell: (r) => (
      <Link href={`/companies/${r.slug}`} className="underline hover:no-underline">
        {r.name}
      </Link>
    ),
  },
  { header: "Mines", cell: (r) => r.count.toString(), thClassName: "w-24" },
];

export default function CompaniesIndexPage() {
  const rows = getCompanyCounts();
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.name} />
    </section>
  );
}
