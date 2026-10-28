import Link from "next/link";

const menu = [
    {href: "/", label: "Beranda"},
    {href: "/tentang", label: "Tentang"},
    {href: "/daftarproyek", label: "DaftarProyek"},
    {href: "/kontak", label: "Kontak"},
];

export default function Navbar() {
    return(
        <header className="bg-utama text-white">
                <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
                    <Link href="/" className="text-xl font-bold">
                    Muhammad Aiko Anail Adi
                    </Link>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {menu.map((item) =>(
                            <li key={item.href}>
                                <Link href={item.href} className="text-gray-200 hover:text-white">
                                {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
        </header>
    );
}