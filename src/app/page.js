import Image from "next/image";
import Link from "next/link";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;
export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id");

  const { data: dataProyekTerbaru, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  const daftarProyek = dataProyekTerbaru || [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="mb-16 flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
        <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full border-4 border-red-600 shadow-md md:h-40 md:w-40">
          <Image
            src="/foto-profil.png"
            alt="Foto Muhammad Aiko Anail Adi"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
            Halo, saya Muhammad Aiko Anail Adi!
          </h1>

          <p className="mt-3 max-w-xl text-sm font-medium text-muted-foreground md:text-base">
            Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/tentang"
              className="rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-700"
            >
              Tentang saya
            </Link>

            <Link
              href="#keahlian-section"
              className="rounded-lg border border-input bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-muted"
            >
              Lihat keahlian
            </Link>
          </div>
        </div>
      </section>

      <section
        id="keahlian-section"
        className="mt-16 border-t border-border pt-4"
      >
        <h2 className="mb-6 text-2xl font-bold text-primary">Keahlian</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills &&
            skills.map((skill) => (
              <Link
                href={`/keahlian/${skill.slug || skill.nama}`}
                key={skill.id || skill.nama}
                className="block transition-transform hover:-translate-y-1"
              >
                <SkillCard nama={skill.nama} level={skill.level} />
              </Link>
            ))}
        </div>

        <div className="mt-6">
          <Link
            href="/keahlian"
            className="rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-700"
          >
            Lihat semua keahlian
          </Link>
        </div>
      </section>

      <section className="mt-16 border-t border-border/60 pt-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">
          Proyek Terbaru
        </h2>

        {error && (
          <p className="rounded-xl border border-dashed border-input p-6 text-center text-aksen">
            Data proyek gagal dimuat: {error.message}
          </p>
        )}

        {!error && daftarProyek.length === 0 && (
          <p className="rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
            Belum ada proyek di database.
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {daftarProyek.map((item) => (
            <Link
              href={`/proyek/${item.slug}`}
              key={item.slug}
              className="block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-mockup-navy p-3">
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-gray-800">
                  {item.gambar_url?.trim() ? (
                    <Image
                      src={item.gambar_url.trim()}
                      alt={item.judul || "Gambar proyek"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-white">
                      Gambar belum tersedia
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs font-medium text-muted-foreground">
                  {item.minggu}
                </span>

                <h3 className="mt-1 line-clamp-1 text-base font-bold text-primary">
                  {item.judul}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                  {item.deskripsi}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/proyek"
            className={buttonVariants({
              size: "lg",
              className: "mt-6",
            })}
          >
            Lihat semua proyek
          </Link>
        </div>
      </section>
    </main>
  );
}
