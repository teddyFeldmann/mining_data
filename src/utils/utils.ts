import { Ownership } from "../../data/interfaces";

export const companySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const formatOwnershipInline = (o: Ownership[]) =>
  o.map(x => `${x.owner.name} ${x.ownership}%`).join(" / ");

export const formatPercent = (n: number) =>
  Number.isInteger(n) ? `${n}%` : `${parseFloat(n.toFixed(1))}%`;