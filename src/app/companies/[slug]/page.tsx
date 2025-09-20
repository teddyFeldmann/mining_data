import Link from "next/link";
import { notFound } from "next/navigation";
import { mines } from "../../../../data/mines";
import { companySlug } from "@/utils/slug";

// Build an index of companies from the data
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

export function generateStaticParams() {
  // Pre-render a page for each company we find in the dataset
  return Array.from(slugToNames.keys()).map((slug) => ({ slug }));
}

const formatPercent = (n: number) =>
  Number.isInteger(n) ? `${n}%` : `${parseFloat(n.toFixed(1))}%`;

export default function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const names = slugToNames.get(params.slug) ?? [];
  if (!names.length) return notFound();

  const displayName = names[0]; // pick the first matching name for title
  const companyMines = mines
    .map((m) => {
      const ownerEntry = m.ownership.find((o) => names.includes(o.owner.name));
      return ownerEntry ? { mine: m, percent: ownerEntry.ownership } : null;
    })
    .filter(Boolean) as { mine: (typeof mines)[number]; percent: number }[];

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{displayName} — Mines</h1>
        <Link href="/" className="text-sm underline hover:no-underline">
          ← Back to all mines
        </Link>
      </div>

      {companyMines.length === 0 ? (
        <p>No mines found for this company.</p>
      ) : (
        <table className="border-collapse border border-gray-300 w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Mine</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Commodity</th>
              <th className="border p-2 text-left">Ownership</th>
            </tr>
          </thead>
          <tbody>
            {companyMines.map(({ mine, percent }) => (
              <tr key={mine.name} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2">{mine.name}</td>
                <td className="border p-2">{mine.location}</td>
                <td className="border p-2">{mine.commodity}</td>
                <td className="border p-2">{formatPercent(percent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
