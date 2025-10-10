export const fmtNumber = (n?: number | null) =>
  n == null ? "—" : n.toLocaleString(undefined, { maximumFractionDigits: 0 });