<div align="center">

# 🤖 DOPI - AI AGENT PSYCHOLOGIST

*Aplikasi Psikiater Virtual Berbasis AI Menggunakan Google Gemini API*

[![Last Commit](https://img.shields.io/github/last-commit/richalfajril/Chatbot-Konseling-GeminiAPI)](https://github.com/richalfajril/Chatbot-Konseling-GeminiAPI/commits/main)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

Built with the tools and technologies:

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-1A73E8?style=for-the-badge\&logo=google\&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge\&logo=dotenv\&logoColor=black)

</div>

---

## Table of Contents

* [Overview](#overview)
* [Fitur](#-fitur)
* [Struktur Proyek](#-struktur-proyek)
* [Teknologi](#-teknologi)
* [Cara Menjalankan Proyek](#-cara-menjalankan-proyek)
* [Penggunaan](#-penggunaan)
* [Debugging](#-debugging)

---

## Overview

**Dopi** adalah aplikasi psikiater virtual berbasis AI yang menggunakan **Google Generative AI**, khususnya **Google Gemini API** melalui Google AI Studio, untuk memberikan respons empatik terhadap masalah psikologis pengguna. Proyek ini memungkinkan pengguna menjalankan aplikasi di lingkungan lokal dengan UI interaktif berbasis **HTML, CSS, dan JavaScript**.

---

## 🎯 Fitur

* **Persona AI:**

  * Nama: **Dopi**
  * Karakter: Empatik, sabar, hangat, mendukung, dan profesional
* Memberikan respons yang mendukung dan empatik kepada pengguna
* Identifikasi tingkat emosi pengguna berdasarkan percakapan
* Rekomendasi langkah awal seperti teknik pernapasan atau jurnal harian
* Tidak memberikan diagnosis klinis, tetapi merekomendasikan bantuan profesional untuk masalah serius

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

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **API:** Google Gemini AI

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone https://github.com/richalfajril/Chatbot-Konseling-GeminiAPI.git
cd Chatbot-Konseling-GeminiAPI
```

### 2. Jalankan Backend

```bash
cd backend
npm install
```

Buat file `.env` dan tambahkan API key:

```env
GEMINI_API_KEY=YOUR_GOOGLE_API_KEY_HERE
```

Jalankan server:

```bash
node app.js
```

Backend akan berjalan di: `http://localhost:3000`.

### 3. Jalankan Frontend

```bash
cd ../frontend
```

Buka file `index.html` langsung di browser Anda.

---

## 📌 Penggunaan

1. Ketik pesan di kolom input di UI frontend
2. Klik tombol **Kirim**
3. Lihat respons dari **Dopi** di layar chat

---

## 🔧 Debugging

* **Backend Error:**

  * Pastikan API key sudah benar di file `.env`
  * Periksa terminal untuk error saat menjalankan server
* **Frontend Error:**

  * Periksa konsol browser (Ctrl+Shift+I → Tab "Console") untuk error JavaScript
  * Pastikan backend berjalan di `http://localhost:3000`

---

Semoga berhasil! 🚀
