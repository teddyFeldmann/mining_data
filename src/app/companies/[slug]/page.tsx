import Link from "next/link";
import { fetchMines } from "@/data/fetchMines";
import {
  formatPercent, mineSlug
} from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";
import { fetchMinesByCompany } from "@/data/fetchMinesByCompany";
import MapClient from "@/components/MapClient";
import { Mine } from "@/data/interfaces";

// --- ADDED: imports for production section ---
import { getCompanyProduction } from "@/data/fetchProduction";
import { fmtNumber } from "@/utils/number";
// --- END ADDED ---


type Row = {
  mine: Awaited<ReturnType<typeof fetchMines>>[number];
  percent: number;
};

export default async function CompanyPage({
  params,
}: {
  // --- MODIFIED: on Next 15+, params in Server Components is a Promise
  params: Promise<{ slug: string }>;
  // --- END MODIFIED ---
}) {
  // --- MODIFIED: await params to read slug ---
  const { slug } = await params;
  // --- END MODIFIED ---

  const { company, rows } = await fetchMinesByCompany(slug);

  // --- ADDED: fetch 2024 production for this company ---
  const productionRows = await getCompanyProduction(company, 2024);
  type Prod = { commodity: string; production: number | null };
  const prodColumns: Column<Prod>[] = [
    { header: "Commodity",        cell: (p) => p.commodity },
    {
      header: "2024 Production",
      cell: (p) => `${fmtNumber(p.production)} mt`,
      thClassName: "text-right",
      tdClassName: "text-right",
    },
  ];
  // --- END ADDED ---

  const columns: Column<Row>[] = [
    {
      header: "Mine",
      cell: (r) => (
        <span>
          <Link
            href={`/mines/${mineSlug(r.mine.name)}`}
            className="underline hover:no-underline font-semibold"
          >{r.mine.name}</Link>
          {r.mine.complex?.name ? <> ({r.mine.complex.name})</> : null}
        </span>
      ),
    },
    { header: "Location",  cell: (r) => r.mine.location },
    { header: "Commodity", cell: (r) => r.mine.commodity.join(", ") },
    { header: "Stake",     cell: (r) => formatPercent(r.percent) },
    { header: "Stage",     cell: (r) => r.mine.stage ?? "—" },
  ];

  const mines: Mine[] = rows.map(r => r.mine);

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{company} — Mines</h1>
        <Link
          href="/companies"
          className="text-sm underline hover:no-underline"
        >
          ← Back to companies
        </Link>
      </div>

      {/* --- ADDED: Total production (2024) section --- */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Total production (2024)</h2>
        {productionRows.length ? (
          <DataTable
            columns={prodColumns}
            data={productionRows}
            getRowKey={(p) => p.commodity}
          />
        ) : (
          <p className="text-sm text-gray-600">No 2024 production reported.</p>
        )}
      </section>
      {/* --- END ADDED --- */}

      <DataTable columns={columns} data={rows} getRowKey={(r) => r.mine.name} />

      <MapClient mines={mines} />
    </main>
  );
}
