"use client";

import { useState } from "react";
import Proyekcard from "./Proyekcard";
import { Button } from "@/components/ui/button";

const daftarkategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.JS"];

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
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setkategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <p className="mt-4 text-muted-foreground">
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
            className="mt-1 w-full rounded-lg border border-input bg-card p-2 md:w-80"
            onChange={(e) => setkata(e.target.value)}
          />

          {kata !== "" && (
            <Button
              variant="link"
              onClick={() => setkata("")}
              className="mt-2 px-0 text-aksen"
            >
              Hapus pencarian
            </Button>
          )}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Menampilkan {hasil.length} dari {proyek.length} proyek
        </p>
      </div>

      
      <div className="mt-6 grid w-full min-w-0 grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hasil.map((item) => (
          <div key={item.slug} className="h-full w-full min-w-0">
            <Proyekcard proyek={item} />
          </div>
        ))}
      </div>


      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border-2 border-dashed border-border bg-card p-6 text-center text-muted-foreground">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}
