 import Hero from "@/components/Hero";
 import SkillCard from "@/components/SkillCard";
 const skills = [
 { nama: "HTML", level: "Menengah" },
 { nama: "CSS", level: "Menengah" },
 { nama: "Git dan GitHub", level: "Dasar" },
 { nama: "Desain poster dengan Canva", level: "Mahir" },
 { nama: "JavaScript", level: "Dasar" },
];
 export default function Home() {
  return (
    <>
   <main className="mx-auto max-w-5xl px-4 py-10">
  <Hero
    nama="Muhammad Aiko Anail Adi"
      tagline="Siswa kelas X SMK, calon Junior Web Developer di
    Kelas Industri UBIG."
   />
   <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <h2 className="mb-3 text-2xl font-bold text-utama">
      tentang saya
    </h2>
    <p className="leading-7 text-balck-700">
      Saya seorang Siswa SMKN 1 Kepanjen dan saya seorang Web Developer Junior Yang mengikuti Kelas Industri UBIG
    </p>
   </section>

     <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-700 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-utama">
            Hobi
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Coding</li>
            <li>Membaca komik</li>
            <li>Game</li>
            <li>Joging</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-700 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl text-utama font-bold">
            CITA-CITA
          </h2>
          <p className="mb-2 text-sm text-gray-600">Menjadi <strong>Full Stack Web Developer</strong>.
             Langkah yang saya rencanakan:</p><br></br>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <ol type="1" className="list-decimal pl-5 marker:text-black-700 marker:font-bold">
            <li className="font-normal">.menuntaskan Kelas Industri UBIG sampai semester 4</li>
            <li className="font-normal">.Bekerja Sebagai Web Developer</li>
            <li className="font-normal">.Magang Di Perusahaan teknologi</li>
            </ol>
          </ul>
        </div>
   </section>
  <section className="mt-10 rounded-2xl border border-gray-700 bg-white p-6 shadow-sm">
   <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
     <div className="grid gap-4 md:grid-cols-3">
       {skills.map((skill) => (
        <SkillCard key={skill.nama} nama={skill.nama}
          level={skill.level} />
        ))}
          </div>
              </section>

            <section className="mt-6 rounded-xl border border-gray-700 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-bold text-utama">JADWAL BELAJAR</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-table-header text-white">
              <tr>
                <th className="px-5 py-5">Hari</th>
                <th className="px-5 py-5">Waktu</th>
                <th className="px-5 py-5">Kegiatan</th>
              </tr>
            </thead>

         
            <tbody className="text-black-700">
              <tr className="border-b border-gray-700">
                <td className="px-4 py4">Senin</td>
                <td className="px-4 py-4">19:00 - 20:00</td>
                <td className="px-4 py-4">Membaca ulang modul</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="px-4 py-4">Selasa</td>
                <td className="px-4 py-4">19:00 - 20:00</td>
                <td className="px-4 py-4">Mengerjakan tugas praktik</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="px-4 py-4">Rabu</td>
                <td className="px-4 py-4">19:00 - 20:00</td>
                <td className="px-4 py-4">Merekam video dan menulis laporan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </main>
      <footer className="mt-6 bg-footer px-5 py-5 text-center text-xs text-footer-teks text-utama text-white">
        © 2026 Muhammad Aiko Anail Adi. Dibuat dengan Next.js di Kelas
        Industri UBIG.
      </footer>
    </>
  );
}

