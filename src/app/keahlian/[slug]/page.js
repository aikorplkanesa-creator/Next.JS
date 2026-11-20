import Link from "next/link";
import { detailKeahlian } from "@/data/keahlian";
import { notFound } from "next/navigation";

export default async function DetailKeahlianPage({ params }) {
  const { slug } = await params;

  const data = detailKeahlian[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">

      <Link
        href="/keahlian"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-utama dark:hover:text-sky-200 mb-6 transition-colors"
      >
        ← Kembali ke daftar keahlian
      </Link>

      <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm">

        <span className="text-sm font-semibold text-red-700">
          Tingkat Kemahiran: {data.level}
        </span>

        <h1 className="text-2xl sm:text-4xl font-bold text-primary mt-2 mb-6 break-words">
          {data.level}
        </h1>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-6">

          <h2 className="text-lg font-bold text-primary mb-2">
            Deskripsi pengalaman
          </h2>

          <p className="text-muted-foreground leading-relaxed break-words">
            {data.deskripsi}
          </p>

        </div>
      </div>

    </main>
  );
}