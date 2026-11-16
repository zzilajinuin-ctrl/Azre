# Ruang Pesan — GitHub Pages

Website papan pesan publik dengan profil simbolik. Tidak memakai foto profil, server sendiri, Render, atau database eksternal. GitHub Issues menjadi tempat penyimpanan pesan.

## Siapkan repositori
1. Buat repositori **public** bernama `ruang-pesan` di akun `zzilajinuin` (atau sesuaikan `REPO_NAME` dan `GITHUB_OWNER` di `app.js`).
2. Unggah semua isi folder ini ke root repositori, termasuk folder `.github`.
3. Buka **Settings → General → Features**, pastikan **Issues** aktif.
4. Buka **Issues → Labels → New label**, buat label bernama `pesan-komunitas`.
5. Buka **Settings → Pages**. Pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu Save.
6. Tunggu GitHub Pages menerbitkan situs. Alamat biasanya `https://zzilajinuin.github.io/ruang-pesan/`.

## Cara memakai
- Pengunjung membaca pesan di halaman website.
- Tombol **Tulis pesan** membuka formulir GitHub. Pengirim harus masuk ke akun GitHub.
- Pengirim memilih simbol, menulis deskripsi, lalu mengisi pesan.
- Pesan yang masuk dengan label `pesan-komunitas` akan muncul di website.

## Catatan batasan
- Semua pesan bersifat publik; ini bukan chat pribadi atau real-time.
- Pengirim memerlukan akun GitHub.
- Profil memakai nama akun GitHub, simbol, dan deskripsi yang ditulis pada formulir pesan. Tidak ada foto atau upload gambar.
- Pesan dibaca dari GitHub Issues melalui API publik.
