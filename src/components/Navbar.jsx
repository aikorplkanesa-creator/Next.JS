
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
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4">

  
        <div className="flex min-w-0 items-center justify-between gap-3 py-3 sm:h-16 sm:py-0">

          <Link
            href="/"
            className="min-w-0 flex-1 truncate text-base font-bold tracking-tight hover:opacity-90 sm:text-xl"
          >
            Muhammad Aiko Anail Adi
          </Link>

          <div className="shrink-0">
            <TombolTema />
          </div>

        </div>

        {/* Navigasi */}
        <nav className="w-full min-w-0 overflow-x-auto pb-3 sm:pb-0">
          <ul className="flex min-w-max items-center gap-5 text-sm font-semibold sm:gap-6">

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
                  <Link
                    href={item.href}
                    className={kelas}
                  >
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
