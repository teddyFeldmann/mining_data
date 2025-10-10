import { supabaseServer } from "@/lib/supabase";
import type { EquipmentVendor } from "@/data/interfaces";

export async function fetchEquipment(): Promise<EquipmentVendor[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("oems")
    .select("name, website, products")
    .order("name");

  if (error) throw error;
  return (data ?? []) as EquipmentVendor[];
}
