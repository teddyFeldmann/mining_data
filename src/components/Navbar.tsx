import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b border-gray-200 pl-2">
      <nav className="mx-auto p-4 flex items-center gap-8 justify-start text-left text-lg text-gray-600">
        <Link href="/" className="font-medium hover:text-black">
          Mines
        </Link>
        <Link href="/companies" className="font-medium hover:text-black">
          Companies
        </Link>
        <Link href="/commodities" className="font-medium hover:text-black">
          Commodities
        </Link>
      </nav>
    </header>
  );
}
