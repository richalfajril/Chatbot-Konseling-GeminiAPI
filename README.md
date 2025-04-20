# Dopi - AI Agents Psychologist

Dopi adalah aplikasi psikiater virtual berbasis AI yang menggunakan Google Generative AI, khususnya Google Gemini API melalui Google AI Studio, untuk memberikan respons empatik terhadap masalah psikologis pengguna. Proyek ini memungkinkan Anda menjalankan aplikasi di lingkungan lokal dengan UI interaktif berbasis HTML, CSS, dan JavaScript.

---

## 🎯 Fitur

- **Persona AI:**
  - Nama: Dopi
  - Karakter: Empatik, sabar, hangat, mendukung, dan profesional
- Memberikan respons yang mendukung dan empatik kepada pengguna.
- Identifikasi tingkat emosi pengguna berdasarkan percakapan.
- Rekomendasi langkah awal seperti teknik pernapasan atau jurnal harian.
- Tidak memberikan diagnosis klinis, tetapi merekomendasikan bantuan profesional untuk masalah serius.

---

## 📂 Struktur Proyek

```
project/
├── backend/
│   ├── app.js          # Kode backend Node.js
│   ├── package.json    # Konfigurasi Node.js
│   ├── .env            # API key Google Generative AI
├── frontend/
│   ├── index.html      # UI aplikasi
│   ├── style.css       # Gaya tampilan
│   ├── script.js       # Logika frontend
```

---

## ⚙️ Teknologi

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **API:** [Google Gemini AI](https://aistudio.google.com/prompts/new_chat)

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
cd REPOSITORY
```

### 2. Jalankan Backend

1. Navigasi ke folder backend:
   ```bash
   cd backend
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Buat file `.env` dan tambahkan API key Anda:
   ```env
   GEMINI_API_KEY=YOUR_GOOGLE_API_KEY_HERE
   ```
   > Ganti `YOUR_GOOGLE_API_KEY_HERE` dengan API key dari Google Generative AI.
4. Jalankan server:
   ```bash
   node app.js
   ```
5. Backend akan berjalan di: `http://localhost:3000`.

### 3. Jalankan Frontend

1. Navigasi ke folder frontend:
   ```bash
   cd ../frontend
   ```
2. Buka file `index.html` di browser Anda.

---

## 📌 Penggunaan

1. Ketik pesan di kolom input di UI frontend.
2. Klik tombol **Kirim**.
3. Lihat respons dari Dopi di layar chat.

---

## 🔧 Debugging

- **Backend Error:**
  - Pastikan API key sudah benar di file `.env`.
  - Periksa terminal untuk error saat menjalankan server.
- **Frontend Error:**
  - Periksa konsol browser (Ctrl+Shift+I → Tab "Console") untuk error JavaScript.
  - Pastikan backend berjalan di `http://localhost:3000`.

---

Semoga berhasil! 🚀
