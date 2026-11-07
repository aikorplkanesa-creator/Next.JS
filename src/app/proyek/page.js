import FilterProyek from "@/components/FilterProyek";
import { proyek } from "@/data/proyek";
export const metadata = {
   title: "proyek",
   description: "Daftar proyek HTML, CSS, JavaScript karya Muhammad Aiko Anail Adi.",
};

export default function DaftarProyek () {
   return (
      <main className="mx-auto max-w5xl px-4 py-10">
         <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Proyek Saya</h1>
         <p className="mt-3 text-lg text-gray-700 dark:text-gray-200 dark:text-gray-300">Kumpulan hasil belajar saya di kelas Industri UBIG. klik kartu untuk melihat detailnya.</p>

         <FilterProyek proyek={proyek} />
      </main>
   );
}



