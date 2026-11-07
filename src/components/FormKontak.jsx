"use client";
import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); 
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false); 

  function kirim(e) {
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }

    if (hp.length < 10) {
        errorBaru.hp = "Nomor HP minimal 10 angka.";
    }

    if (keperluan === "") {
        errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
        errorBaru.pesan = "pesan minimal 10 karakter";
    }

    setError(errorBaru);

    
    const lolosValidasi = Object.keys(errorBaru).length === 0;
    setBerhasil(lolosValidasi);

    
    if (!lolosValidasi) {
      e.preventDefault();
    }
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4" action="https://formspree.io/f/meaawgrg" method="POST">
      
      <div>
        <label htmlFor="nama" className="block font-semibold">Nama lengkap</label>
        <input type="text" id="nama" name="nama" value={nama} placeholder="Contoh: Muhammad Aiko Anail Adi" required className={kelasInput} 
          onChange={(e) => {
            const input = e.currentTarget;
            if (/[0-9]/.test(input.value)) {
              input.setCustomValidity("jangan gunakan angka hanya boleh huruf...");
              input.reportValidity();
              input.value = input.value.replace(/[0-9]/g, '');
            } else {
              input.setCustomValidity("");
            }
            setNama(input.value);
          }} 
        />
        {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
      </div>

     
      <div>
        <label htmlFor="email" className="block font-semibold">Email</label>
        <input type="email" id="email" name="email" value={email} placeholder="nama@contoh.com" required className={kelasInput} pattern=".+@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
      </div>

     
      <div>
        <label htmlFor="hp" className="block font-semibold">Nomor HP</label>
        <input type="text" id="hp" name="hp" value={hp} placeholder="081234567890" required maxLength={13} className={kelasInput} 
          onChange={(e) => {
            const input = e.currentTarget;
            if (/[^0-9]/.test(input.value)) {
              input.setCustomValidity("hanya angka huruf dilarang");
              input.reportValidity();
              input.value = input.value.replace(/[^0-9]/g, '');
            } else {
              input.setCustomValidity("");
            }
            setHp(input.value);
          }}
        /> 
        {error.hp && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.hp}</p>}
      </div>

      
      <div>
        <label htmlFor="keperluan" className="block font-semibold">Keperluan</label>
        <select id="keperluan" name="keperluan" value={keperluan} required className={`${kelasInput} outline-none focus:border-blue-500`}
          onChange={(e) => setKeperluan(e.target.value)}
        >
          <option value="">--Pilih keperluan--</option>
          <option value="Bersama">Bertanya</option>
          <option value="Kerja sama">Kerja sama</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {error.keperluan && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.keperluan}</p>}
      </div>

      
      <div>
        <label htmlFor="pesan" className="block font-semibold text-utama dark:text-sky-200">Pesan</label>
        <textarea id="pesan" name="pesan" rows="5" value={pesan} placeholder="Tulis pesan Anda di sini..." required className={`${kelasInput} outline-none focus:border-blue-500`}
          onChange={(e) => {
            const input = e.currentTarget;
            if (/[0-9]/.test(input.value)) {
              input.setCustomValidity("hanya huruf dilarang angka");
              input.reportValidity();
              input.value = input.value.replace(/[0-9]/g, '');
            } else {
              input.setCustomValidity("");
            }
            setPesan(input.value);
          }}
    
        />
        {error.pesan && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.pesan}</p>}
      </div>

      
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-900 dark:bg-green-900 dark:text-green-100 font-medium text-sm">
          Terimakah, {nama}! pesanmu sudah lolos pemeriksaan.
        </p>
      )}

     
      <button type="submit" className="rounded-lg bg-utama px-6 py-3 font-semibold text-white transition hover:opacity-90 cursor-pointer">
        Kirim Pesan
      </button>

    </form>
  );
}
