
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "@/components/TombolTema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/keahlian", label: "Keahlian" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-utama text-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center px-4 md:h-16 md:flex-nowrap">

        {/* Nama */}
        <Link
          href="/"
          className="order-1 min-w-0 flex-1 truncate py-4 text-base font-bold tracking-tight hover:opacity-90 sm:text-xl md:flex-none md:whitespace-nowrap md:py-0"
        >
          Muhammad Aiko Anail Adi
        </Link>

        {/* Tombol tema */}
        <div className="order-2 ml-3 shrink-0 md:ml-auto md:order-3">
          <TombolTema />
        </div>

        {/* Menu navigasi */}
        <nav className="order-3 w-full min-w-0 pb-3 md:order-2 md:ml-6 md:w-auto md:flex-1 md:pb-0">
          <ul className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold md:flex-nowrap md:justify-center md:gap-4 lg:gap-6">

            {menu.map((item) => {
              const aktif =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              const kelas = aktif
                ? "border-b-2 border-white pb-1 font-bold text-white"
                : "border-b-2 border-transparent pb-1 text-gray-200 transition-colors hover:text-white";

              return (
                <li key={item.href} className="shrink-0">
                  <Link href={item.href} className={kelas}>
                    {item.label}
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>

      </div>
    </header>
  );
}
