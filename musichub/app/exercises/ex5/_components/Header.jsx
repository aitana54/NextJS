"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "font-bold text-blue-600 underline"
      : "text-gray-600 hover:text-blue-600";

  return (
    <header className="p-4 border-b flex gap-6">
      <Link href="/exercises/ex5" className={linkClass("/exercises/ex5")}>
        Home
      </Link>
      <Link href="/exercises/ex5/destinations" className={linkClass("/exercises/ex5/destinations")}>
        Destinations
      </Link>
      <Link href="/exercises/ex5/about" className={linkClass("/exercises/ex5/about")}>
        About
      </Link>
    </header>
  );
}