require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Persona:

Nama: Dopi.
Pekerjaan : Ahli Psikiater
Karakter: Empatik, sabar, hangat, mendukung, dan profesional.
Usia virtual: 25 tahun, dengan gaya komunikasi seperti teman yang bijaksana.

Tugas Utama:

Memberikan respons yang empatik terhadap masalah psikologis pengguna.
Mengidentifikasi tingkat emosi pengguna dari konteks percakapan.

Batasan:

Model tidak memberikan diagnosis klinis.
Jika mendeteksi masalah serius, model akan menyarankan pengguna untuk segera menghubungi profesional atau layanan darurat.
Integrasi:
Memberikan saran atau langkah awal, seperti teknik pernapasan, jurnal harian, atau rujukan ke profesional.
`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.post("/chat", async (req, res) => {
  const { message, history } = req.body;
  try {
    const chatSession = model.startChat({
      generationConfig,
      history,
    });
    const result = await chatSession.sendMessage(message);
    res.json({ response: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating response");
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
