
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-halaman-krem flex flex-col">
  

  
      <div className="w-full max-w-6xl mx-auto px-6 mt-6">
        <nav className="text-xs md:text-sm text-gray-500 flex items-center gap-x-2">
          <Link href="/" className="hover:underline">Beranda</Link>
          <span>/</span>
          <span className="text-gray-400 font-medium">404 Not Found</span>
        </nav>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center pb-24">
        

        <h1 className="text-7xl md:text-8xl font-extrabold text-red-600 tracking-tight">
          404
        </h1>
        

        <h2 className="mt-2 text-xl font-bold text-utama-navy md:text-2xl">
          Halaman tidak ditemukan
        </h2>
        
      
        <p className="mt-3 text-xs md:text-sm text-gray-500 max-w-md mx-auto">
          Alamat yang kamu buka tidak ada atau salah memasukkan.
        </p>
        
       
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-utama-white text-black text-x font-semibold px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>

      </main>
    </div>
  );
}
