# Aplikasi Skripsi
Aplikasi Skripsi untuk memprediksi dan memberikan rekomendasi matakuliah kepada mahasiswa berdasarkan nilai.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in `DATABASEURL` (MongoDB connection string) and `SESSION_SECRET` (any long random string).
3. `npm run dev` (or `npm start`)

The app will not start without a `.env` file — `DATABASEURL` and `SESSION_SECRET` are required environment variables (no hardcoded defaults, for security).
