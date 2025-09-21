import Link from "next/link";
import type { Ownership } from "../../data/interfaces";
import { companySlug, formatPercent } from "@/utils/utils";

export function OwnershipInlineLinks({ owners }: { owners: Ownership[] }) {
  return (
    <>
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
