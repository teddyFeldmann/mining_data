import { supabaseServer } from "@/lib/supabase";
import type { Startup } from "@/data/interfaces";

export async function fetchStartups(): Promise<Startup[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("startups")
    .select("name, website")
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as Startup[];
}
