import { supabaseServer } from "@/lib/supabase";

type StartupRow = {
  name: string;
  website: string | null;
};

export const dynamic = "force-dynamic"; // always fetch fresh; or use `export const revalidate = 60`

export default async function StartupsPage() {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("startups")
    .select("name, website")
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Mining Startups</h1>
        <p className="text-sm text-red-600">Failed to load startups.</p>
      </section>
    );
  }

  const rows: StartupRow[] = data ?? [];

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mining Startups</h1>
      <ul className="space-y-2">
        {rows.map((s) => (
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
