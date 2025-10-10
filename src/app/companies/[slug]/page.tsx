import Link from "next/link";
import { fetchMines } from "@/data/fetchMines";
import {
  formatPercent,
} from "../../../utils/utils";
import { DataTable, type Column } from "../../../components/DataTable";
import { fetchMinesByCompany } from "@/data/fetchMinesByCompany";

type Row = {
  mine: Awaited<ReturnType<typeof fetchMines>>[number];
  percent: number;
};

export default async function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { company, rows } = await fetchMinesByCompany(slug);

  const columns: Column<Row>[] = [
    {
      header: "Mine",
      cell: (r) => (
        <span>
          <strong>{r.mine.name}</strong>
          {r.mine.complex?.name ? <> ({r.mine.complex.name})</> : null}
        </span>
      ),
    },
    { header: "Location", cell: (r) => r.mine.location },
    { header: "Commodity", cell: (r) => r.mine.commodity.join(", ") },
    { header: "Stake", cell: (r) => formatPercent(r.percent) },
    { header: "Stage", cell: (r) => r.mine.stage ?? "—" },
  ];

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{company} — Mines</h1>
        <Link
          href="/companies"
          className="text-sm underline hover:no-underline"
        >
          ← Back to companies
        </Link>
      </div>
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.mine.name} />
    </main>
  );
}
