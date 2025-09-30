import { EquipmentCompaniesList } from "../../../data/equipmentcompanies";

export default function StartupsPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mining Equipment Providers</h1>
      <ul className="space-y-2">
        {EquipmentCompaniesList.map((s) => (
          <li key={s.name}>
            {s.website ? (
              <a
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {s.name}
              </a>
            ) : (
              s.name
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}