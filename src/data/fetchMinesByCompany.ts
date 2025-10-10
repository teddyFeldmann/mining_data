import { companySlug, getEffectiveOwnership } from "@/utils/utils";
import { fetchMines } from "./fetchMines";
import { MineRow, MinesByCompany } from "./interfaces";
import { notFound } from "next/navigation";


export async function fetchMinesByCompany(slug: string): Promise<MinesByCompany> {
  const mines = await fetchMines();
  const candidates = new Map<string, string[]>();
  for (const m of mines) {
    for (const o of getEffectiveOwnership(m)) {
      const s = companySlug(o.owner.name);
      candidates.set(s, [...(candidates.get(s) ?? []), o.owner.name]);
    }
  }
  const names = candidates.get(slug) ?? [];
  if (!names.length) return notFound();

  const rows: MineRow[] = mines
    .map((m) => {
      const entry = getEffectiveOwnership(m).find((o) =>
        names.includes(o.owner.name)
      );
      return entry ? { mine: m, percent: entry.ownership } : null;
    })
    .filter(Boolean) as MineRow[];

  return {
    rows,
    company: names[0]
  };
}
