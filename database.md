#struktur Database Portofolio  
Database disimpan di supabase, project `portofolio-Muhammad Aiko Anail Adi` (region Southeast Asia, Singapore). Alamat project dan publishable key disimpan di `.env.local`, yang tidak ikut di-commit karena tercantum di `(.env*)`.

##Table `projects`  

Daftar proyek portofolio Muhammad Aiko Anail Adi.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | waktu baris dibuat, terisi otomatis dengan `now()` |
| `slug` | `text` | Penanda unik di alamat, misalnya `halaman-profil` (unik) |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | kalimat singkat tentang proyek |
| `kategori` | `text` | HTML, CSS, atau JavaScript |
| `minggu` | `text` | Minggu proyek dibuat, misalnyan `Minggu 01` | 
| `fitur` | `text[]` | Daftar hal yang dipelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public, misalnya` /proyek/proyek-kontak.png` |

RLS aktif. policy `pengunjung boleh membaca proyek` : peran `anon` boleh `select` semua baris 

## Tabel `messages`

pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | primary key, nomor otomatis 1, 2 , 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama pengiriman | 
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan | 

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca pesan. policy `insert` dibuat di Minggu 15.

## Tabel `skills`

Daftar keahlian Muhammad Aiko Anail Adi 

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Dasar, Menengah, atau Mahir |

RLS aktif. policy `pengunjung boleh membaca keahlian`: peran `anon` boleh `select` semua baris.