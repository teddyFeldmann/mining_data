import { supabaseServer } from "@/lib/supabase";
import type { Mine, Ownership } from "@/data/interfaces";

type MineRow = {
  id: string;
  name: string;
  location: string;
  stage: string;
  lat: number | null;
  lng: number | null;
};

type OwnershipRow = {
  mine_id: string;
  company_name: string;
  percent: number;
};

type MCRow = {
  mine_id: string;
  commodity_name: string;
};

export async function fetchMines(): Promise<Mine[]> {
  const sb = supabaseServer();

  const [minesRes, ownRes, mcRes] = await Promise.all([
    sb
      .from("mines")
      .select("id,name,location,stage,lat,lng")
      .order("name", { ascending: true }),
    sb.from("mine_ownership").select("mine_id,company_name,percent"),
    sb.from("mine_commodities").select("mine_id,commodity_name"),
  ]);

  for (const { error } of [minesRes, ownRes, mcRes]) {
    if (error) throw error;
  }

  // Generic helper: turn rows into Map<key, V[]>
  function groupToMap<T, K, V>(
    rows: T[] | null | undefined,
    keyOf: (row: T) => K,
    valueOf: (row: T) => V
  ): Map<K, V[]> {
    const map = new Map<K, V[]>();
    for (const row of rows ?? []) {
      const k = keyOf(row);
      const v = valueOf(row);
      const bucket = map.get(k);
      if (bucket) bucket.push(v);
      else map.set(k, [v]);
    }
    return map;
  }

  const ownershipByMine = groupToMap(
    ownRes.data as OwnershipRow[] | null,
    (r) => r.mine_id,
    (r) => ({
      owner: { name: r.company_name },
      ownership: Number(r.percent ?? 0),
    })
  );

  const commoditiesByMine = groupToMap(
    mcRes.data as MCRow[] | null,
    (r) => r.mine_id,
    (r) => r.commodity_name
  );

  return (minesRes.data ?? []).map((m: MineRow) => ({
    name: m.name,
    location: m.location ?? "",
    commodity: commoditiesByMine.get(m.id) ?? [],
    stage: m.stage ?? undefined,
    ownership: ownershipByMine.get(m.id) ?? [],
    complex: undefined,
    lat: m.lat ?? undefined,
    lng: m.lng ?? undefined,
  }));
}
