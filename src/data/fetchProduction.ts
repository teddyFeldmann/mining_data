// src/data/fetchProduction.ts
import { supabaseServer } from "@/lib/supabase";

export type ProductionRow = {
  company: string;
  commodity: string;
  production: number | null;
  year: number;
};

/** Get raw production rows (defaults to 2024). */
export async function fetchProduction(year = 2024): Promise<ProductionRow[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("production")
    .select("company, commodity, production, year")
    .eq("year", year);
  if (error) throw error;
  return (data ?? []) as ProductionRow[];
}

/** Pivot: distinct commodities for the year + company→commodity→value lookup. */
export async function getProductionPivot(year = 2024): Promise<{
  commodities: string[];
  byCompany: Map<string, Record<string, number>>;
}> {
  const rows = await fetchProduction(year);

  const commoditiesSet = new Set<string>();
  const byCompany = new Map<string, Record<string, number>>();

  for (const r of rows) {
    if (!r.company || !r.commodity) continue;
    commoditiesSet.add(r.commodity);
    const rec = byCompany.get(r.company) ?? {};
    if (r.production != null) rec[r.commodity] = r.production;
    byCompany.set(r.company, rec);
  }

  return { commodities: Array.from(commoditiesSet).sort(), byCompany };
}

/** For a single company: [{ commodity, production }] sorted by commodity. */
export async function getCompanyProduction(
  companyName: string,
  year = 2024
): Promise<Array<{ commodity: string; production: number | null }>> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("production")
    .select("commodity, production")
    .eq("company", companyName)
    .eq("year", year)
    .order("commodity", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Array<{ commodity: string; production: number | null }>;
}
