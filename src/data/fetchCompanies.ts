import { supabaseServer } from "@/lib/supabase";
import { companySlug } from "@/utils/utils";

type CompanyRow = {
  name: string;
  primaryListing: string[] | null;
  secondaryListing: string[] | null;
};

type OwnershipRow = {
  company_name: string;
  mine_id: string;
};

type Company = {
  name: string;
  slug: string;
  count: number;
  primary?: string[];
  secondary?: string[];
};

export async function fetchCompanies(): Promise<Company[]> {
  const sb = supabaseServer();

  const [companiesRes, ownershipRes] = await Promise.all([
    sb
      .from("companies")
      .select("name, primaryListing, secondaryListing")
      .order("name"),
    sb.from("mine_ownership").select("company_name, mine_id"),
  ]);

  // simple error handling
  const err = companiesRes.error ?? ownershipRes.error;
  if (err) throw err;

  // distinct mine count per company
  const minesByCompany = new Map<string, Set<string>>();
  for (const r of (ownershipRes.data ?? []) as OwnershipRow[]) {
    if (!r.company_name || !r.mine_id) continue;
    const set = minesByCompany.get(r.company_name) ?? new Set<string>();
    set.add(r.mine_id);
    minesByCompany.set(r.company_name, set);
  }

  const rows: Company[] = ((companiesRes.data ?? []) as CompanyRow[]).map((c) => ({
    name: c.name,
    slug: companySlug(c.name),
    count: minesByCompany.get(c.name)?.size ?? 0,
    primary: c.primaryListing ?? [],
    secondary: c.secondaryListing ?? [],
  }));

  // sort: by mine count desc, then name
  rows.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return rows;
}
