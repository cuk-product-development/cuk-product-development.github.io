import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, "produk.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Ambil semua produk
app.get("/api/produk", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  res.json(data);
});

// Tambah produk
app.post("/api/produk", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const newId = data.length ? Math.max(...data.map(p => p.id)) + 1 : 1;
  const newProduk = { id: newId, ...req.body };
  data.push(newProduk);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json(newProduk);
});

// Edit produk
app.put("/api/produk/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const idx = data.findIndex(p => p.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "Produk tidak ditemukan" });
  data[idx] = { id: parseInt(req.params.id), ...req.body };
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json(data[idx]);
});

// Hapus produk
app.delete("/api/produk/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(DATA_PATH));
  data = data.filter(p => p.id !== parseInt(req.params.id));
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Produk dihapus" });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
