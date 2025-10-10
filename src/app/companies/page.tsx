// src/app/companies/page.tsx
import Link from "next/link";
import { DataTable, type Column } from "@/components/DataTable";
import { fetchCompanies } from "@/data/fetchCompanies";

// --- ADDED: imports for production pivot + number formatting ---
import { getProductionPivot } from "@/data/fetchProduction";
import { fmtNumber } from "@/utils/number";
// --- END ADDED ---

type Row = {
  name: string;
  slug: string;
  count: number;
  primary?: string[];
  secondary?: string[];
  // --- ADDED: production map for dynamic columns ---
  prod?: Record<string, number>; // commodity -> 2024 production value
  // --- END ADDED ---
};

export const revalidate = 60;

function ListingsCell({
  primary = [],
  secondary = [],
}: {
  primary?: string[];
  secondary?: string[];
}) {
  const items = [
    ...primary.map((s) => ({ s, bold: true })),
    ...secondary.map((s) => ({ s, bold: false })),
  ];
  if (items.length === 0) return <>—</>;
  return (
    <>
      {items.map(({ s, bold }, i) => (
        <span key={s}>
          <a
            href={`https://finance.yahoo.com/quote/${encodeURIComponent(s)}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            <span className={bold ? "font-semibold" : ""}>{s}</span>
          </a>
          {i < items.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

// --- ADDED: accept search params and parse sort target/direction ---
type Search = { sort?: string; dir?: "asc" | "desc" };

export default async function CompaniesIndexPage({
  searchParams,
}: {
  // Next 15+ passes searchParams as a Promise in RSC; unwrap it
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;
  const sortKey = sp.sort?.trim(); // e.g., "Copper" | "Iron ore" | "mines"
  const sortDir: "asc" | "desc" = sp.dir === "asc" ? "asc" : "desc";
  // --- END ADDED ---
  // existing companies fetch (name, slug, count, listings)
  const companies = await fetchCompanies();

  // --- ADDED: production pivot + merge into rows ---
  const prodPivot = await getProductionPivot(2024);
  const rows: Row[] = companies.map((c) => ({
    ...c,
    prod: prodPivot.byCompany.get(c.name) ?? {},
  }));
  // --- END ADDED ---

  // --- ADDED: apply sorting based on sortKey/dir ---
  const cmpNum = (a?: number, b?: number) => (a ?? 0) - (b ?? 0);
  rows.sort((a, b) => {
    if (sortKey === "mines") {
      const d = cmpNum(a.count, b.count);
      return sortDir === "asc"
        ? d || a.name.localeCompare(b.name)
        : -d || a.name.localeCompare(b.name);
    }
    if (sortKey && prodPivot.commodities.includes(sortKey)) {
      const av = a.prod?.[sortKey];
      const bv = b.prod?.[sortKey];
      const d = cmpNum(av, bv);
      return sortDir === "asc"
        ? d || a.name.localeCompare(b.name)
        : -d || a.name.localeCompare(b.name);
    }
    // default: Mines desc, then name
    const d = cmpNum(a.count, b.count);
    return -d || a.name.localeCompare(b.name);
  });
  // --- END ADDED ---

  // --- MODIFIED: build columns dynamically so we can append one per commodity ---
  const columns: Column<Row>[] = [
    {
      header: "Company",
      cell: (r) => (
        <Link
          href={`/companies/${r.slug}`}
          className="underline hover:no-underline"
        >
          {r.name}
        </Link>
      ),
    },
    { header: "Mines", cell: (r) => r.count.toString(), thClassName: "w-24" },
    {
      header: "Listings",
      cell: (r) => <ListingsCell primary={r.primary} secondary={r.secondary} />,
    },
  ];

  for (const commodity of prodPivot.commodities) {
    columns.push({
      header: `${commodity} (2024)`,
      cell: (r) => fmtNumber(r.prod?.[commodity]),
      thClassName: "text-right",
      tdClassName: "text-right",
    });
  }

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Companies</h1>

        {/* --- ADDED: simple sort controls (builds querystring) --- */}
        <form method="get" className="flex items-center gap-2 text-sm">
          <label className="sr-only" htmlFor="sort">
            Sort
          </label>
          <select
            id="sort"
            name="sort"
            defaultValue={sortKey ?? ""}
            className="border rounded px-2 py-1"
          >
            <option value="">Default (Mines desc)</option>
            <option value="mines">Mines</option>
            {prodPivot.commodities.map((c) => (
              <option key={c} value={c}>
                {c} (2024)
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="dir">
            Direction
          </label>
          <select
            id="dir"
            name="dir"
            defaultValue={sortDir}
            className="border rounded px-2 py-1"
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>

          <button type="submit" className="border rounded px-3 py-1">
            Apply
          </button>
        </form>
        {/* --- END ADDED --- */}
      </div>

      {/* --- MODIFIED: pass sorted/merged rows --- */}
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.name} />
      {/* --- END MODIFIED --- */}
    </section>
  );
}
