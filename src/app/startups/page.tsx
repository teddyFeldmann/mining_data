import { StartupsList } from "../../../data/startups";

export default function StartupsPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mining Startups</h1>
      <ul className="space-y-2">
        {StartupsList.map((s) => (
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
