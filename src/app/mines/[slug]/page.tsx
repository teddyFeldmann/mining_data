// src/app/mines/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
// import { DataTable, type Column } from "@/components/DataTable"; // only if you plan to add a table later
import { fetchMines } from "@/data/fetchMines";
import { companySlug, formatPercent, getEffectiveOwnership, mineSlug } from "@/utils/utils";
// import type { Mine } from "@/data/interfaces";

// Pre-render a page for each mine from Supabase
export async function generateStaticParams() {
  const mines = await fetchMines();
  return mines.map((m) => ({ slug: mineSlug(m.name) }));
}

export default async function MinePage({ params }: { params: { slug: string } }) {
  const mines = await fetchMines();
  const mine = mines.find((m) => mineSlug(m.name) === params.slug);
  if (!mine) return notFound();

  const owners = getEffectiveOwnership(mine);

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {mine.name}
          {mine.complex?.name ? <> ({mine.complex.name})</> : null}
        </h1>
        <Link href="/" className="text-sm underline hover:no-underline">
          ← Back to all mines
        </Link>
      </div>

      <div className="text-sm space-y-1">
        <div><span className="font-medium">Location:</span> {mine.location}</div>
        <div><span className="font-medium">Commodity:</span> {mine.commodity.join(", ")}</div>
        <div><span className="font-medium">Stage:</span> {mine.stage ?? "—"}</div>
        <div>
          <span className="font-medium">Ownership:</span>{" "}
          {owners.length ? (
            <>
              {mine.complex?.name ? <strong>{mine.complex.name}: </strong> : null}
              {owners.map((o, i) => (
                <span key={o.owner.name}>
                  <Link
                    href={`/companies/${companySlug(o.owner.name)}`}
                    className="underline hover:no-underline"
                  >
                    {o.owner.name} ({formatPercent(o.ownership)})
                  </Link>
                  {i < owners.length - 1 ? ", " : ""}
                </span>
              ))}
            </>
          ) : (
            "—"
          )}
        </div>
      </div>
    </main>
  );
}
