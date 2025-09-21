import React from "react";

export type Column<T> = {
  header: string;
  cell: (row: T) => React.ReactNode;
  thClassName?: string;
  tdClassName?: string;
};

export function DataTable<T>({
  columns,
  data,
  getRowKey,
}: {
  columns: Column<T>[];
  data: T[];
  getRowKey?: (row: T, index: number) => React.Key;
}) {
  return (
    <table className="w-full text-sm border-separate border-spacing-0">
      <thead className="bg-gray-100">
        <tr className="border-b border-gray-300">
          {columns.map((c, i) => (
            <th key={i} className="text-left p-2">{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={getRowKey?.(row, i) ?? i} className="border-b border-gray-200 last:border-b-0">
            {columns.map((c, j) => (
              <td key={j} className="p-2">
                {c.cell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
