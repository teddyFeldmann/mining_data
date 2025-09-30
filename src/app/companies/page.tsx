import Link from "next/link";
import { mines } from "../../../data/mines";
import { companiesList } from "../../../data/companies";
import { companySlug } from "@/utils/utils";
import { DataTable, type Column } from "@/components/DataTable";

type Row = {
  name: string;
  count: number;
  slug: string;
  primary?: string[];
  secondary?: string[];
};

function getCompanyCounts(): Row[] {
  const counts = new Map<string, number>();

  for (const m of mines) {
    // Use complex ownership if present; else mine ownership; else none
    const effective = m.complex?.ownership ?? m.ownership ?? [];

    // De-dupe company names per mine before counting
    const names = new Set(effective.map((o) => o.owner.name));
    for (const name of names) {
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => {
      const company = companiesList.find((c) => c.name === name);
      return {
        name,
        count,
        slug: companySlug(name),
        primary: company?.primaryListing ?? [],
        secondary: company?.secondaryListing ?? [],
      };
    })
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

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
  { header: "Listings", cell: (r) => <ListingsCell primary={r.primary} secondary={r.secondary} /> },
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
