import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";

const daftarSkills = [
  { nama: "HTML", level: "Menengah", slug: "HTML" },
  { nama: "CSS", level: "Menengah", slug: "CSS" },
  { nama: "Git dan GitHub", level: "Dasar", slug: "Git dan Github" },
  { nama: "Desain poster dengan Canva", level: "Mahir", slug: "Desain poster dengan canva" },
  { nama: "JavaScript", level: "Dasar", slug: "JavaScript" },
];

export default function Home() {
  const dataProyekTerbaru = proyek.slice(0, 3);
  
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      
  
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-16 text-center md:text-left">
        
        
        <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-red-650 shadow-md flex-shrink-0">
          <Image
            src="/foto-profil.png"
            alt="Foto Muhammad Aiko Anail Adi"
            fill
            className="object-cover"
            priority
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-utama-navy tracking-tight leading-tight">
            Halo, saya Muhammad Aiko Anail Adi!
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600 font-medium max-w-xl">
            Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG.
          </p>

        
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link 
  href="/tentang" 
  className="bg-red-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-sm"
  >
              Tentang saya
                </Link>

            <Link 
              href="#keahlian-section" 
              className="bg-white border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              Lihat keahlian
            </Link>
          </div>
        </div>

      </section>

      <section id="keahlian-section" className="mt-16 pt-4 border-t border-gray-100">
        <h2 className="mb-6 text-2xl font-bold text-utama">Keahlian</h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          {daftarSkills.map((skill) => (
            <Link 
              href={`/keahlian/${skill.slug}`} 
              key={skill.nama} 
              className="block transition-transform hover:-translate-y-1"
            >

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-utama-navy">{skill.nama}</h3>
                <p className="text-sm text-gray-500 mt-1">Level: {skill.level}</p>
                <span className="text-xs text-blue-600 font-semibold mt-4 inline-block hover:underline">
                  Lihat detail &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link 
            href="/keahlian" 
            className="bg-red-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-sm"
          >
            Lihat semua keahlian
          </Link>
        </div>
      </section>


      <section className="mt-16 border-t border-gray-200/60 pt-12">
        <h2 className="mb-6 text-2xl font-bold text-utama">Proyek Terbaru</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {dataProyekTerbaru.map((item) => (
            <Link href={`/proyek/${item.slug}`} key={item.slug} className="block bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">

              <div className="relative w-full aspect-[16/10] bg-mockup-navy flex items-center justify-center p-3">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-800">
                  <Image 
                    src={item.gambar} 
                    alt={item.judul} 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs text-gray-400 font-medium">{item.minggu}</span>
                <h3 className="text-base font-bold text-utama-navy mt-1 line-clamp-1">{item.judul}</h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">{item.deskripsi}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <Link 
            href="/proyek" 
            className="inline-block bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
          >
            Lihat semua proyek
          </Link>
        </div>
      </section>

    </main>
  );
}
