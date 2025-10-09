import { fetchEquipment } from "@/data/fetchEquipment";
import { DataTable, type Column } from "@/components/DataTable";

export const revalidate = 60;

export default async function EquipmentPage() {
  const rows = await fetchEquipment();

  const columns: Column<(typeof rows)[number]>[] = [
    {
      header: "Manufacturer",
      cell: (r) => (
        <a
          href={r.website ?? undefined}
          className="underline hover:no-underline"
        >
          <strong>{r.name}</strong>
        </a>
      ),
    },
    {
      header: "Products",
      cell: (r) => (r.products?.length ? r.products.join(", ") : "—"),
    },
  ];

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Equipment</h1>
      <DataTable columns={columns} data={rows} getRowKey={(r) => r.name} />
    </section>
  );
}
