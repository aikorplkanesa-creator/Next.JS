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
| `nama` | `text` | Nama pengiriman, `Muhammad Aiko Anail Adi` | 
| `email` | `text` | Email pengirim, `aikorplkanesa@gmail.com` |
| `pesan` | `text` | Isi pesan, `hello` | 

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca pesan. policy `insert` dibuat di Minggu 15.


## Tabel `skills`

Daftar keahlian Muhammad Aiko Anail Adi.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `nama` | `text` | Nama keahlian, HTML |
| `level` | `text` | Dasar, Menengah, atau Mahir. Level: `Menengah` |
| `nama` | `text` | Nama keahlian, CSS |
| `level` | `text` | Dasar, Menengah, atau Mahir. Level: `Menengah` |
| `nama` | `text` | Nama keahlian, Git dan GitHub |
| `level` | `text` | Dasar, Menengah, atau Mahir. Level: `Dasar` |
| `nama` | `text` | Nama keahlian, Desain poster dengan Canva |
| `level` | `text` | Dasar, Menengah, atau Mahir. Level: `Mahir` |
| `nama` | `text` | Nama keahlian, JavaScript |
| `level` | `text` | Dasar, Menengah, atau Mahir. Level: `Dasar` |

RLS aktif. Policy `pengunjung boleh membaca keahlian`: peran `anon` boleh `select` semua baris.




## Tabel `jadwal`

Daftar jadwal belajar dan pengerjaan tugas Muhammad Aiko Anail Adi.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis dengan `now()` |
| `hari` | `text` | Hari pelaksanaan kegiatan, `Senin`|
| `waktu` | `text` | Rentang jam pelaksanaan kegiatan, `19.00 - 20.00` |
| `kegiatan` | `text` | Deskripsi kegiatan, `Membaca ulang modul` |
| `hari` | `text` | hari pelaksanaan kegiatan `selasa` |
| `waktu` | `text` | rentang jam pelaksanaan kegaitan `19.00 - 20.00` |
| `kegiatan` | `text` | deskripsi kegiatan, `mengerjakan tugas praktik` | 
| `hari` | `text` | Hari pelaksanaan kegiatan, `rabu` |
| `waktu` | `text` | Rentang jam pelaksanaan kegiatan, `19.00 - 20.00` |
| `kegiatan` | `text` | deskripsi kegiatan, `Merekam video dan menulis laporan` | 

RLS aktif. policy `pengunjung boleh membaca jadwal`: peran `anon` boleh `select` semua baris.

