"use client";

import { useState } from "react";
import Proyekcard from "./Proyekcard";

const daftarkategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.JS"];

const tombolBiasa =
  "rounded-full border border-utama dark:border-sky-200 px-4 py-1 text-sm font-semibold text-utama dark:text-sky-200";

const tombolaktif =
  "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white";

export default function FilterProyek({ proyek }) {
  const [kategori, setkategori] = useState("Semua");
  const [kata, setkata] = useState("");

  const katakecil = kata.toLowerCase();

  const hasil = proyek.filter((p) => {
    const textKategori = Array.isArray(p.kategori)
      ? p.kategori.join(" ").toLowerCase()
      : p.kategori
        ? String(p.kategori).toLowerCase()
        : "";

    const cocokkategori =
      kategori === "Semua" ||
      textKategori.includes(kategori.toLowerCase());

    const cocokkata = p.judul.toLowerCase().includes(katakecil);

    return cocokkategori && cocokkata;
  });

  return (
    <div className="mt-8 w-full min-w-0">
      {/* Navigasi Kategori */}
      <div className="flex flex-wrap gap-2">
        {daftarkategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setkategori(k)}
            className={kategori === k ? tombolaktif : tombolBiasa}
          >
            {k}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Kategori terpilih: {kategori}
      </p>

      {/* Kotak Pencarian */}
      <div className="mt-6">
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            id="cari"
            value={kata}
            placeholder="Contoh: Modul-1"
            className="mt-1 w-full rounded-lg border border-gray-800 bg-white p-2 dark:bg-gray-800 md:w-80"
            onChange={(e) => setkata(e.target.value)}
          />

          {kata !== "" && (
            <button
              type="button"
              onClick={() => setkata("")}
              className="mt-2 text-sm font-semibold text-aksen hover:underline dark:text-red-300"
            >
              Hapus pencarian
            </button>
          )}
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Menampilkan {hasil.length} dari {proyek.length} proyek
        </p>
      </div>

      {/* Grid Proyek */}
      <div className="mt-6 grid w-full min-w-0 grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hasil.map((item) => (
          <div key={item.slug} className="w-full min-w-0">
            <Proyekcard proyek={item} />
          </div>
        ))}
      </div>

      {/* Pesan Jika Tidak Ada Proyek */}
      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border-2 border-dashed border-gray-700 bg-white p-6 text-center text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}