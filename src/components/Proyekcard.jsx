import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Proyekcard({ proyek }) {
  const daftarKategori = Array.isArray(proyek.kategori)
    ? proyek.kategori
    : proyek.kategori
      ? proyek.kategori.split(",").map((item) => item.trim())
      : [];

  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block rounded-xl hover:shadow-md"
    >
      <Card className="h-full overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={proyek.gambar_url.trim()}
            alt={`Tangkapan layar ${proyek.judul}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top"
          />
        </div>

        <CardHeader>
          <div className="flex flex-wrap gap-2">
            {daftarKategori.map((kat, index) => (
              <Badge key={index} variant={kat.toLowerCase()}>
                {kat}
              </Badge>
            ))}
          </div>

          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>

          <CardDescription className="line-clamp-3">
            {proyek.deskripsi}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
