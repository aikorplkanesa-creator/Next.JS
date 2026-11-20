import FormKontak from "@/components/FormKontak";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description:
        "Hubungi Muhammad Aiko Anail Adi melalui form kontak, GitHub, atau email.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardContent className="pt-6">
                        <FormKontak />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">
                            Temukan Saya di
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-aksen hover:underline"
                                >
                                    GitHub (@aikorplkanesa-creator)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:aikorplkanesa@gmail.com"
                                    className="text-aksen hover:underline"
                                >
                                    aikorplkanesa@gmail.com
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
