import SkillCard from "@/components/SkillCard";
import Link from "next/link";

const skills = [
  { nama: "HTML", level: "Menengah", slug: "html" },
  { nama: "CSS", level: "Menengah", slug: "css" },
  { nama: "Git dan GitHub", level: "Dasar", slug: "git-dan-github" },
  { nama: "Desain poster dengan Canva", level: "Mahir", slug: "canva" },
  { nama: "JavaScript", level: "Dasar", slug: "javascript" },
];

export default function Keahlian() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 flex flex-col items-center">

      <div className="text-center mb-8 sm:mb-10 w-full">
        <h1 className="text-2xl sm:text-3xl text-utama dark:text-sky-200 font-bold">
          Keahlian saya
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.
        </p>
      </div>

      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto justify-items-center">

          {skills.map((skill) => (
            <div
              key={skill.nama}
              className="w-full max-w-[320px]"
            >
              <Link
                href={`/keahlian/${skill.slug}`}
                className="block transition-transform hover:-translate-y-1"
              >
                <SkillCard
                  nama={skill.nama}
                  level={skill.level}
                />
              </Link>
            </div>
          ))}

        </div>
      </section>

      <section className="w-full max-w-4xl mt-8">
        <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
          <Link
            href="/"
            className="inline-flex items-center bg-black text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm"
          >
            Kembali ke beranda
          </Link>
        </div>
      </section>

    </main>
  );
}