"use client";

import { mines } from "../../data/mines";
import { t } from "@/utils/tableStyles";
import OwnershipCell from "@/components/OwnershipCell";


type MineRow = (typeof mines)[number];
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
              <td className={t.td}><strong>{m.name}</strong></td>
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