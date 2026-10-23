import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
      <Image
        src="/foto-profil.png"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        priority
        className="aspect-square shrink-0 rounded-full border-4 border-aksen object-cover"
      />

      <div className="w-full">
        <h1 className="text-3xl font-bold text-utama">
          Halo, saya {nama}!
        </h1>

        <p className="mt-3 text-lg text-gray-700">
          {tagline}
        </p>
      </div>
    </section>
  );
}