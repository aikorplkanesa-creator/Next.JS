'use client'

import Link from "next/link";

export default function kontak() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-10 min-h-screen">

            <h1 className="mb-8 text-3xl font-bold text-utama md:text-4xl">
                Hubungi saya
            </h1>

            <div className="grid gap-6 md:grid-cols-3 w-full">

         
                <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm md:col-span-2">

                
                    <form 
                        className="space-y-5" 
                        action="https://formspree.io/f/mnppblpg" 
                        method="POST"
                    >

                        <div>
                            <label htmlFor="nama" className="block font-semibold">
                                Nama lengkap
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                placeholder="Contoh: Budi Santoso"
                                required
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3"
                                onChange={(e) =>{
                                    const input = e.currentTarget;
                                    if(/[0-9]/.test(input.value)) {
                                        input.setCustomValidity("jangan gunakan angka hanya boleh huruf...");
                                        input.reportValidity();
                                        input.value = input.value.replace(/[0-9]/g, '');
                                    } else {
                                        input.setCustomValidity("");
                                    }
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nama@contoh.com"
                                required
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3"
                                pattern=".+@gmail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="Nomor HP" className="block font-semibold">Nomor HP</label>
                            <input 
                                type="text" 
                                id="Nomor HP" 
                                name="Nomor HP" 
                                placeholder="081234567890" 
                                required 
                                maxLength={13} 
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3" 
                                onChange={(e) => {
                                    const input = e.currentTarget
                                    if(/[^0-9]/.test(input.value)){
                                        input.setCustomValidity("hanya angka huruf dilarang");
                                        input.reportValidity();
                                        input.value = input.value.replace(/[^0-9]/g, '');
                                    } else {
                                        input.setCustomValidity("");
                                    }
                                }}
                            /> 
                        </div>

                        <div>
                            <label htmlFor="keperluan" className="block font-semibold">Keperluan</label>
                            <select
                                id="keperluan"
                                name="keperluan"
                                required
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-blue-500"
                            >
                                <option value="">Pilih keperluan</option>
                                <option value="kerja sama">Kerja Sama/proyek</option>
                                <option value="pertanyaan">Pertanyaan umum</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pesan" className="block font-semibold text-utama">
                                Pesan
                            </label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                rows="5"
                                placeholder="Tulis pesan Anda di sini..."
                                required
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-blue-500"
                                onChange={(e) => {
                                    const input = e.currentTarget
                                    if(/[0-9]/.test(input.value)){
                                        input.setCustomValidity("hanya huruf dilarang angka");
                                        input.reportValidity();
                                        input.value = input.value.replace(/[0-9]/g, '');
                                    } else {
                                        input.setCustomValidity("");
                                    }
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-lg bg-utama px-6 py-3 font-semibold text-white transition hover:opacity-90 cursor-pointer"
                        >
                            Kirim Pesan
                        </button>

                    </form>

                </section>


                <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-utama">
                            Temukan Saya di
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-utama">
                                    GitHub
                                </h3>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="mt-1.5 inline-block text-sm text-aksen hover:underline"
                                    rel="noopener noreferrer"
                                >
                                    @aikorplkanesa-creator
                                </Link>
                            </div>

                            <div>
                                <h3 className="font-semibold text-utama">
                                    Email
                                </h3>
                                <a
                                    href="mailto:aikorplkanesa@gmail.com"
                                    className="mt-1.5 inline-block w-full break-all text-sm text-aksen hover:underline"
                                >
                                    aikorplkanesa@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-150 text-xs text-gray-400 hidden md:block">
                        Tanggapan biasanya dikirim dalam 1x24 jam.
                    </div>
                </section>

            </div>

        </main>
    );
}
