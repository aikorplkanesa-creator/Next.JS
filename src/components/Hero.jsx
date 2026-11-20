import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex w-full min-w-0 flex-col items-center gap-4 text-center md:flex-row md:text-left">
      <Image
        src="/foto-profil.png"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        priority
        className="aspect-square h-[180px] w-[180px] shrink-0 rounded-full border-4 border-aksen object-cover"
      />

      <div className="w-full min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-tight text-primary break-words sm:text-3xl md:text-5xl">
          Halo, saya {nama}!
        </h1>

        <p className="mt-3 break-words text-base leading-7 text-muted-foreground sm:text-lg">
          {tagline}
        </p>
        <div className="mt-5 flex justify-center gap-3 md:justify-start">
          <Link href="/proyek" className={buttonVariants({ size: "lg" })}>
            Lihat Proyek
          </Link>
          <Link
            href="/kontak"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
