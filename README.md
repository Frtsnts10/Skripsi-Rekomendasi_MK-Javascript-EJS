# Aplikasi Skripsi — Rekomendasi Mata Kuliah

Aplikasi skripsi untuk memprediksi dan memberikan rekomendasi mata kuliah/peminatan
kepada mahasiswa berdasarkan riwayat nilai.

## Tech stack

- **Backend**: Node.js, Express
- **View engine**: EJS
- **Database**: MongoDB (via Mongoose)
- **Auth**: Passport (local strategy) + `express-session`

## Struktur folder

```
app.js                    Entry point aplikasi
routes/                   Route definitions (Express routers)
controllers/               Route handler logic
middleware/                 Auth guards (isLoggedIn, isAdmin)
models/                     Mongoose schemas
views/                      Template EJS yang benar-benar dipakai (di-render oleh routes/)
public/                     Static assets (CSS, gambar) yang dilayani Express
docs/algorithm-drafts/      Draft/prototipe algoritma rekomendasi (belum terhubung ke aplikasi — lihat README di folder itu)
legacy/views/                View .ejs lama yang tidak lagi dipakai route manapun, disimpan untuk referensi
```

## Setup & cara menjalankan

1. **Install dependencies**
   ```
   npm install
   ```
2. **Konfigurasi environment** — copy `.env.example` ke `.env`, lalu isi:
   - `DATABASEURL` — connection string MongoDB kamu (Atlas atau lokal)
   - `SESSION_SECRET` — string acak panjang bebas (untuk signing session cookie)
   - `PORT` — opsional, default `3000`

   Aplikasi tidak akan start tanpa `.env` — kedua variabel di atas wajib diisi (tidak ada default hardcoded, demi keamanan).
3. **Jalankan aplikasi**
   ```
   npm run dev     # pakai nodemon, auto-restart saat file berubah — cocok untuk development
   # atau
   npm start        # jalankan langsung dengan node, tanpa auto-restart
   ```
4. Buka `http://localhost:3000` (atau port lain sesuai `.env`).

### Bikin akun admin pertama

Semua route admin (`/IndexAdmin`, `/DNilaiAdm`, CRUD di `/datamatakuliah`) sekarang
mengharuskan login dengan akun yang **username-nya persis `Admin`** (logika ini
mengikuti cara redirect login yang sudah ada di `routes/index.js`). Untuk membuat
akun admin pertama kali:

1. Buka `/Register`, daftar dengan username `Admin`.
2. Login lewat `/Login` — kamu akan otomatis diarahkan ke `/IndexAdmin`.

Akun dengan username lain akan dianggap mahasiswa biasa dan diarahkan ke `/IndexMhs`.

## Known limitations

- **Algoritma rekomendasi belum terhubung ke aplikasi.** Fitur `/Rekomendasi` dan
  `/HasilRek` saat ini hanya menampilkan data yang tersimpan di database, belum
  menghitung rekomendasi sesungguhnya. Ada beberapa draft algoritma (C4.5,
  collaborative filtering) di `docs/algorithm-drafts/` yang belum lengkap/belum
  benar — lihat README di folder tersebut sebelum melanjutkan bagian ini.
- Kredensial MongoDB yang sempat ter-hardcode di riwayat git repo ini sebaiknya
  di-rotate lewat dashboard Atlas, meskipun sudah dipindah ke `.env`.
