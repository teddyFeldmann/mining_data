import Link from "next/link";
import { DataTable, type Column } from "@/components/DataTable";
import { fetchCompanies } from "@/data/fetchCompanies";

type Row = {
  name: string;
  slug: string;
  count: number;
  primary?: string[];
  secondary?: string[];
};

export const revalidate = 60;

function ListingsCell({
  primary = [],
  secondary = [],
}: { primary?: string[]; secondary?: string[] }) {
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

export default async function CompaniesIndexPage() {
  const companies = await fetchCompanies();

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <DataTable columns={columns} data={companies} getRowKey={(r) => r.name} />
    </section>
  );
}
