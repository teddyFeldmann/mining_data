// src/app/page.tsx
"use client";

import Link from "next/link";
import { mines } from "../../data/mines";                // adjust path if needed
import { t } from "@/utils/tableStyles";
import OwnershipCell from "@/components/OwnershipCell";
import { mineSlug } from "@/utils/utils";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mine Data</h1>

      <table className={t.table}>
        <thead>
          <tr className={t.theadRow}>
            <th className={t.th}>Mine</th>
            <th className={t.th}>Location</th>
            <th className={t.th}>Commodity</th>
            <th className={t.th}>Ownership</th>
          </tr>
        </thead>
        <tbody>
          {mines.map((m) => (
            <tr key={m.name} className={t.row}>
              <td className={t.td}>
                <Link
                  href={`/mines/${mineSlug(m.name)}`}
                  className="underline hover:no-underline font-semibold"
                >
                  {m.name}
                </Link>
                {m.complex?.name ? <> ({m.complex.name})</> : null}
              </td>
              <td className={t.td}>{m.location}</td>
              <td className={t.td}>{m.commodity.join(", ")}</td>
              <td className={t.td}><OwnershipCell mine={m} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
