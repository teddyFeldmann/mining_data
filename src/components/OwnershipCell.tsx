// src/ui/OwnershipCell.tsx
import Link from "next/link";
import type { Mine } from "../../data/interfaces";
import { getEffectiveOwnership, formatPercent, companySlug } from "../utils/utils";

export default function OwnershipCell({ mine }: { mine: Mine }) {
  const owners = getEffectiveOwnership(mine);
  if (!owners.length) return <>—</>;

  return (
    <>
      {mine.complex ? <strong>{mine.complex.name}: </strong> : null}
      {owners.map((o, i) => (
        <span key={o.owner.name}>
          <Link
            href={`/companies/${companySlug(o.owner.name)}`}
            className="underline hover:no-underline"
          >
            {o.owner.name} ({formatPercent(o.ownership)})
          </Link>
          {i < owners.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}
