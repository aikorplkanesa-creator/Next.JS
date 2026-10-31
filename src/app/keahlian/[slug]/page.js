import Link from "next/link";
import { detailKeahlian } from "@/data/keahlian";
import { notFound } from "next/navigation";

export default async function DetailKeahlianpage({params}) {
    const {slug} = await params;
    const data = detailKeahlian[slug];
    if(!data) {
        notFound();
    }
    return(
        <main className="mx-auto max-w-4xl px-4 py-10">
            <Link href="/keahlian" className="inline-flex items-center text-sm font-medium text-gray-600 hover: text-utama mb-6 transition-colors">
              ← kembali ke daftar keahlian
            </Link>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ">
            <span className="text-sm font-semibold text-red-700">
                Tingkat Kemahiran: {data.level}
            </span>

            <h1 className="text-4xl font-bold text-utama mt-2 mb-6">
                {data.level}
            </h1>

            <div className="border-t border-gray-100 pt-6">
                <h2 className="text-lg font-bold text-utama mb-2">Deskripsi pengalaman</h2>
                <p className="text-gray-600 leading-relaxed">
                    {data.deskripsi}
                </p>
            </div>
        </div>
        </main>
    )
}