import { Mine, Ownership } from "../../data/interfaces";

// export const companySlug = (name: string) =>
//   name
//     .toLowerCase()
//     .replace(/&/g, " and ")
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "");

export const formatOwnershipInline = (o: Ownership[]) =>
  o.map(x => `${x.owner.name} ${x.ownership}%`).join(" / ");

export const formatPercent = (n: number) =>
  Number.isInteger(n) ? `${n}%` : `${parseFloat(n.toFixed(1))}%`;

export const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const companySlug = slugify;
export const commoditySlug = slugify;
export const mineSlug = slugify;

// NEW: source ownership from complex if present; else from mine; else empty
export const getEffectiveOwnership = (mine: Mine): Ownership[] =>
  mine.complex?.ownership ?? mine.ownership ?? [];

// NEW: "ComplexName: A (x%), B (y%)" or just "A (x%), B (y%)"
export const formatOwnershipWithComplexFromMine = (mine: Mine): string => {
  const owners = getEffectiveOwnership(mine);
  if (!owners.length) return "—";
  const core = formatOwnershipInline(owners);
  return mine.complex ? `${mine.complex.name}: ${core}` : core;
};
