"use client";

import { mines } from "../../data/mines";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mine Data</h1>
      <table className="border-collapse border border-gray-400 w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 p-2">Mine Name</th>
            <th className="border border-gray-400 p-2">Owner</th>
            <th className="border border-gray-400 p-2">% Ownership</th>
            <th className="border border-gray-400 p-2">Location</th>
            <th className="border border-gray-400 p-2">Commodity</th>
          </tr>
        </thead>
        <tbody>
          {mines.map((mine, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-400 p-2">{mine.name}</td>
              <td className="border border-gray-400 p-2">{mine.owner}</td>
              <td className="border border-gray-400 p-2">{mine.ownership}</td>
              <td className="border border-gray-400 p-2">{mine.location}</td>
              <td className="border border-gray-400 p-2">{mine.commodity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
