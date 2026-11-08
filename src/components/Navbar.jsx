"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "@/components/TombolTema";

const menu = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/proyek", label: "Proyek" },
    { href: "/keahlian", label: "keahlian"},
    { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        
        <header className="bg-utama dark:bg-gray-900 text-white sticky top-0 z-50 shadow-md transition-colors">
            

            <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-4">
                
  
                <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-90">
                    Muhammad Aiko Anail Adi
                </Link>


                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-x-5 text-sm font-semibold">
                        {menu.map((item) => {
                            let kelas = "text-gray-200 hover:text-white transition-colors";

                            if (pathname === item.href) {
                                kelas = "font-bold text-white underline underline-offset-8 decoration-2";
                            }

                            return (
                                <li key={item.href}>
                                    <Link href={item.href} className={kelas}>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    
  
                    <div className="flex-shrink-0">
                        <TombolTema />
                    </div>
                </div>

            </div>
        </header>
    );
}
