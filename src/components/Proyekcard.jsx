import Image from "next/image";
import Link from "next/link";

export default function Proyekcard({ proyek }) {
    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="block overflow-hidden rounded-xl border border-gray-700 bg-white shadow-sm hover:shadow-md"
        >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
            <Image
                src={proyek.gambar}
                alt={`Tangkapan layar ${proyek.judul}`}
                width={640}
                height={420}
                className="h-auto w-full"
            />
            </div>

            <div className="p-5">
                <div className="flex flex-wrap gap-2">
                    {/* Menggunakan Array.isArray agar aman dari error map jika ada data string */}
                    {Array.isArray(proyek.kategori) ? (
                        proyek.kategori.map((kat, index) => (
                            <span className="rounded-full bg-latar px-3 py-1 text-xs font-semibold text-utama" key={index}>
                                {kat} {/* <- Menampilkan teks kategori seperti HTML, CSS, dll */}
                            </span>
                        ))
                    ) : (
                        // Penyelamat jika datanya tidak sengaja ditulis string biasa ("HTML")
                        proyek.kategori && (
                            <span className="rounded-full bg-latar px-3 py-1 text-xs font-semibold text-utama">
                                {proyek.kategori}
                            </span>
                        )
                    )}
                </div>

                <h3 className="mt-3 text-lg font-semibold text-utama">
                    {proyek.judul}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                    {proyek.deskripsi}
                </p>
            </div>
        </Link>
    );
}
