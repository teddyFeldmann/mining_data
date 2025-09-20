"use client";

import { mines } from "../../data/mines";
import { companySlug } from "@/utils/slug";

import Link from "next/link";

const formatPercent = (n: number) =>
  Number.isInteger(n) ? `${n}%` : `${parseFloat(n.toFixed(1))}%`;

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mine Data</h1>
      <table className="border-collapse border border-gray-400 w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 p-2">Mine Name</th>
            <th className="border border-gray-400 p-2">Ownership</th>
            <th className="border border-gray-400 p-2">Location</th>
            <th className="border border-gray-400 p-2">Commodity</th>
          </tr>
        </thead>
        <tbody>
          {mines.map((m, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-400 p-2">{m.name}</td>
              <td className="border p-2">
                {m.ownership.map((o, i) => (
                  <span key={o.owner.name}>
                    <Link
                      href={`/companies/${companySlug(o.owner.name)}`}
                      className="underline hover:no-underline"
                    >
                      {o.owner.name} ({formatPercent(o.ownership)})
                    </Link>
                    {i < m.ownership.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
              <td className="border border-gray-400 p-2">{m.location}</td>
              <td className="border border-gray-400 p-2">{m.commodity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
