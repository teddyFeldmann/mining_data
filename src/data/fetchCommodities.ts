import { supabaseServer } from "@/lib/supabase";
import { commoditySlug } from "@/utils/utils";

type Row = { name: string; count: number; slug: string };

export async function getCommodityCounts(): Promise<Row[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("commodity_counts")
    .select("commodity_name, mine_count")
    .order("mine_count", { ascending: false })
    .order("commodity_name", { ascending: true });

  if (error) throw error;

  return (data ?? []).map(({ commodity_name, mine_count }) => ({
    name: commodity_name,
    count: Number(mine_count),
    slug: commoditySlug(commodity_name),
  }));
}