'use client'

import Link from "next/link";
import FormKontak from "@/components/FormKontak";

export default function kontak() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-10 min-h-screen">

            <h1 className="mb-8 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                Hubungi saya
            </h1>

            <div className="grid gap-6 md:grid-cols-3 w-full">

               
                <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>

                <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-utama dark:text-sky-200">
                            Temukan Saya di
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-utama dark:text-sky-200">
                                    GitHub
                                </h3>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="mt-1.5 inline-block text-sm text-aksen dark:text-red-300 hover:underline"
                                    rel="noopener noreferrer"
                                >
                                    @aikorplkanesa-creator
                                </Link>
                            </div>

                            <div>
                                <h3 className="font-semibold text-utama dark:text-sky-200">
                                    Email
                                </h3>
                                <a
                                    href="mailto:aikorplkanesa@gmail.com"
                                    className="mt-1.5 inline-block w-full break-all text-sm text-aksen dark:text-red-300 hover:underline"
                                >
                                    aikorplkanesa@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-150 text-xs text-gray-400 hidden md:block">
                        &copy; 2026 Muhammad Aiko Anail Adi. Dibuat dengan Next.js di kelas Industri UBIG.
                    </div>
                </section>

            </div>
        </main>
    );
}
