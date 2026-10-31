import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyek } from "@/data/proyek";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = proyek.find((p) => p.slug === slug);
    if (!item) {
        return { title: "Proyek tidak ditemukan" };
    }
    return { title: item.judul };
}

export default async function DetailProyek({ params }) {

    const { slug } = await params; 
    
    const item = proyek.find((p) => p.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-halaman-krem text-[#1e293b] px-4 py-12 md:px-24 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl">
                

                <Link href="/proyek" className="inline-flex items-center text-x font-semibold text-gray-500 hover:underline mb-4">
                    &larr; Kembali ke daftar proyek
                </Link>


                <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
                    

                    <div className="w-full bg-mockup-navy rounded-xl p-4 md:p-6 mb-6 flex justify-center items-center">
                        <div className="relative w-full aspect-[4/3] max-w-xl rounded-lg overflow-hidden border border-gray-800 shadow-inner">
                            <Image
                                src={item.gambar}
                                alt={`Tangkapan layar ${item.judul}`}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>


                    <div className="text-xs md:text-sm text-gray-500 font-medium mb-3">
                        {Array.isArray(item.kategori) ? item.kategori.join(', ') : item.kategori} &middot; Dibuat di {item.minggu}
                    </div>


                    <h1 className="text-2xl md:text-3xl font-extrabold text-utama-navy tracking-tight mb-4 capitalize">
                        {item.judul.replace("-", " ")}
                    </h1>


                    <div className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                        {item.deskripsi}
                    </div>


                    <div className="mb-8 pt-4 border-t border-gray-100">
                        <h2 className="text-lg font-bold text-utama-navy mb-3">Yang Saya Pelajari</h2>
                        <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-2">
                            {item.fitur.map((f, index) => (
                                <li key={index}>{f}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="pt-4 border-t border-gray-100">
                        <Link
                            href="/proyek"
                            className="inline-block bg-utama-red text-black text-x font-semibold px-4 py-2.5 rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
                        >
                          Lihat semua proyek
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
