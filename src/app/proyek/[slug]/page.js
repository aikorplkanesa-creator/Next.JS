import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";

export async function generateStaticParams() {
  return proyek.map((item) => ({
    slug: item.slug,
  }));
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  
  const item = proyek.find((p) => p.slug === slug);
  if (!item) {
    return (
      <main className="min-h-screen bg-[#fefaf4] flex items-center justify-center px-4 py-10 text-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-red-500">Proyek Tidak Ditemukan</h1>
          <p className="mt-2 text-gray-600">
            Parameter slug <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600 font-mono">"{slug}"</code> tidak cocok.
          </p>
          <Link href="/proyek" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
            &larr; Kembali ke daftar proyek
          </Link>
        </div>
      </main>
    );
  }

  const teksKategori = Array.isArray(item.kategori) 
    ? item.kategori.join(", ") 
    : item.kategori;

  return (
    // 1. Mengubah background halaman utama menjadi krem dan memenuhi layar
    <main className="min-h-screen bg-[#fefaf4] text-[#1e293b] px-4 py-12 md:px-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl">
        
        {/* Tombol kembali ditaruh di luar card */}
        <Link href="/proyek" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:underline mb-4">
          &larr; Kembali ke daftar proyek
        </Link>

        {/* 2. Pembungkus Card Putih */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
          
          {/* Bagian Bingkai Foto / Mockup Screen */}
          <div className="w-full bg-[#1e293b] rounded-xl p-4 md:p-6 mb-6 flex justify-center items-center">
            <div className="relative w-full aspect-[16/10] max-w-xl rounded-lg overflow-hidden border border-gray-800 shadow-inner">
              <Image
                src={item.gambar}
                alt={`Tangkapan layar ${item.judul}`}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Info Kategori & Minggu */}
          <div className="text-xs md:text-sm text-gray-500 font-medium mb-3">
            {teksKategori} &middot; Dibuat di {item.minggu || item.Minggu}
          </div>

          {/* Judul Proyek */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] tracking-tight mb-4">
            {item.judul}
          </h1>

          {/* Deskripsi */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            {item.deskripsi}
          </p>

          {/* Garis Batas Pembatas Pembelajaran */}
          <div className="mb-8 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#1e293b] mb-3">Yang Saya Pelajari</h2>
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-2">
              {item.fitur && item.fitur.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tombol Navigasi Bawah di dalam Card */}
          <div className="pt-4 border-t border-gray-100">
            <Link href="/proyek" className="inline-block bg-[#e11d48] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-opacity-90 transition-all shadow-sm">
              Lihat semua proyek
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
