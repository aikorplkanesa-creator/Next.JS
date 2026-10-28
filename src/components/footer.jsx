export default function Footer(){
    const tahun = new Date(). getFullYear();

return(
    <footer className="mt-auto bg-utama p-6 text-center text-latar">
        <p>&copy; {tahun} Muhammad Aiko Anail Adi. Dibuat dengan Next.js di kelas Industri UBIG.</p>
    </footer>
);
}