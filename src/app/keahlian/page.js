import SkillCard from "@/components/SkillCard";
import Link from "next/link";

const skills = [

  { nama: "HTML", level: "Menengah", slug: "html" },
  { nama: "CSS", level: "Menengah", slug: "css" },
  { nama: "Git dan GitHub", level: "Dasar", slug: "git-dan-github" },
  { nama: "Desain poster dengan Canva", level: "Mahir", slug: "canva" },
  { nama: "JavaScript", level: "Dasar", slug: "javascript" },
];

export default function keahlian() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 flex flex-col items-center">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl text-utama font-bold">Keahlian saya</h1>
        <p className="mt-2 text-gray-600">
          Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.
        </p>
      </div>

      <section className="w-full flex justify-center">
        <div className="grid gap-4 md:grid-cols-3 w-full max-w-4xl justify-items-center">
          {skills.map((skill) => (
            <div key={skill.nama} className="w-full max-w-[320px]">
              <Link 
                href={`/keahlian/${skill.slug}`} 
                className="block transition-transform hover:-translate-y-1"
              >
                <SkillCard nama={skill.nama} level={skill.level} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mr-170">
          <div className="pt-4 border-t border-gray-600">
            <Link
            href="/"
            className="inline-nlock bg-black text-white text-x font-semibold px-4 py-2.5 rounded-lg hover:bg-opacity-90 treansition-all shadow-sm">
                Kembali ke beranda
            </Link>
         </div>
      </section>

    </main>
  );
}
