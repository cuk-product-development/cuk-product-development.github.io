// page.js
// ==========================================
// Helpers & Constants
// ==========================================
const STORAGE_USERS = 'app_users';
const STORAGE_CURRENT = 'app_current';
const STORAGE_PRODUCTS = 'app_products';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);

// Storage functions
function readUsers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]'); }
  catch (e) { return []; }
}
function writeUsers(arr) { localStorage.setItem(STORAGE_USERS, JSON.stringify(arr)); }

function setCurrent(u) { localStorage.setItem(STORAGE_CURRENT, JSON.stringify(u)); }
function getCurrent() {
  try { return JSON.parse(localStorage.getItem(STORAGE_CURRENT) || 'null'); }
  catch (e) { return null; }
}
function clearCurrent() { localStorage.removeItem(STORAGE_CURRENT); }

function readProducts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || 'null'); }
  catch (e) { return null; }
}
function writeProducts(arr) { localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(arr)); }

// Initial products
const SAMPLE_PRODUCTS = [
  { id: 1, nama: "Kopi Arabika", harga: 55000, deskripsi: "Kopi premium dengan aroma khas." },
  { id: 2, nama: "Teh Hijau", harga: 30000, deskripsi: "Teh hijau alami kaya antioksidan." },
  { id: 3, nama: "Cokelat Premium", harga: 45000, deskripsi: "Cokelat asli dengan rasa lembut." }
];
if (!readProducts()) writeProducts(SAMPLE_PRODUCTS);

// ==========================================
// Elements
// ==========================================
const authOverlay = qs('#authOverlay');
const loginBox = qs('#loginBox');
const registerBox = qs('#registerBox');

const loginUser = qs('#loginUser');
const loginPass = qs('#loginPass');
const loginError = qs('#loginError');
const btnLogin = qs('#btnLogin');
const btnCreateDemo = qs('#btnCreateDemo');

const regName = qs('#regName');
const regEmail = qs('#regEmail');
const regUsername = qs('#regUsername');
const regPass = qs('#regPass');
const regError = qs('#regError');
const btnRegister = qs('#btnRegister');
const btnBackToLogin = qs('#btnBackToLogin');

const userArea = qs('#userArea');
const logoutBtn = qs('#logoutBtn');
const navKeluar = qs('#navKeluar');

const btnTambah = qs('#btnTambah');
const produkList = qs('#produkList');
const modal = qs('#modal');
const btnBatal = qs('#btnBatal');
const produkForm = qs('#produkForm');
const modalTitle = qs('#modalTitle');
const btnExport = qs('#btnExport');

const totalProdukEl = qs('#totalProduk');
const avgHargaEl = qs('#avgHarga');
const produkTerbaruEl = qs('#produkTerbaru');
const nilaiStokEl = qs('#nilaiStok');

const sidebar = qs('#sidebar');
const openSidebar = qs('#openSidebar');
const closeSidebar = qs('#closeSidebar');

// ==========================================
// Sidebar Controls
// ==========================================
openSidebar.addEventListener('click', () => sidebar.classList.remove('-translate-x-full'));
closeSidebar.addEventListener('click', () => sidebar.classList.add('-translate-x-full'));

// ==========================================
// Auth Overlay Controls
// ==========================================
function showAuthOverlay() {
  authOverlay.classList.remove('hidden');
  authOverlay.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  loginError.textContent = '';
  regError.textContent = '';
  loginUser.value = loginPass.value = '';
  regName.value = regEmail.value = regUsername.value = regPass.value = '';

  loginBox.classList.remove('hidden');
  registerBox.classList.add('hidden');

  userArea.classList.add('hidden');
  btnExport.classList.add('hidden');
}

function hideAuthOverlay() {
  authOverlay.classList.add('hidden');
  authOverlay.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
  btnExport.classList.remove('hidden');
}

// ==========================================
// Products Rendering
// ==========================================
function getProducts() { return readProducts() || []; }
function setProducts(arr) { writeProducts(arr); }

function renderProduk() {
  const produkData = getProducts();
  produkList.innerHTML = '';
  produkData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform fade-in';
    card.innerHTML = `
      <div class="bg-gradient-to-br from-sky-50 to-indigo-50 h-32 flex items-center justify-center">
        <i data-lucide="box" class="w-12 h-12 text-sky-500"></i>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800">${escapeHtml(p.nama)}</h3>
        <p class="text-sm text-gray-500 mb-2">Rp ${Number(p.harga).toLocaleString()}</p>
        <p class="text-gray-600 text-sm mb-3">${escapeHtml(p.deskripsi)}</p>
        <div class="flex justify-end space-x-2">
          <button onclick="editProduk(${p.id})" class="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 text-sm"><i data-lucide='edit-3'></i>Edit</button>
          <button onclick="hapusProduk(${p.id})" class="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"><i data-lucide='trash-2'></i>Hapus</button>
        </div>
      </div>
    `;
    produkList.appendChild(card);
  });
  lucide.createIcons();
  renderStats();
}

function renderStats() {
  const produkData = getProducts();
  totalProdukEl.innerText = produkData.length;
  const avg = produkData.length ? Math.round(produkData.reduce((a, b) => a + Number(b.harga), 0) / produkData.length) : 0;
  avgHargaEl.innerText = produkData.length ? ('Rp ' + avg.toLocaleString()) : '-';
  produkTerbaruEl.innerText = produkData.length ? produkData[produkData.length - 1].nama : '-';
  const totalHarga = produkData.reduce((a, b) => a + Number(b.harga), 0);
  nilaiStokEl.innerText = produkData.length ? ('Rp ' + (totalHarga * 3).toLocaleString()) : '-';
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// ==========================================
// Produk Modal
// ==========================================
btnTambah.addEventListener('click', () => {
  modalTitle.textContent = 'Tambah Produk';
  produkForm.reset();
  qs('#produkId').value = '';
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});

btnBatal.addEventListener('click', () => modal.classList.add('hidden'));

produkForm.onsubmit = e => {
  e.preventDefault();
  const id = qs('#produkId').value;
  const nama = qs('#nama').value.trim();
  const harga = Number(qs('#harga').value);
  const deskripsi = qs('#deskripsi').value.trim();
  if (!nama || !harga) return alert('Isi nama dan harga');

  const list = getProducts();
  if (id) {
    const idx = list.findIndex(x => x.id == id);
    if (idx > -1) list[idx] = { id: Number(id), nama, harga, deskripsi };
  } else {
    const newId = list.length ? Math.max(...list.map(p => p.id)) + 1 : 1;
    list.push({ id: newId, nama, harga, deskripsi });
  }
  setProducts(list);
  modal.classList.add('hidden');
  renderProduk();
};

window.editProduk = id => {
  const produk = getProducts().find(p => p.id == id);
  if (!produk) return alert('Produk tidak ditemukan');
  modalTitle.textContent = 'Edit Produk';
  qs('#produkId').value = produk.id;
  qs('#nama').value = produk.nama;
  qs('#harga').value = produk.harga;
  qs('#deskripsi').value = produk.deskripsi;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.hapusProduk = id => {
  if (!confirm('Yakin ingin menghapus produk ini?')) return;
  const list = getProducts().filter(p => p.id != id);
  setProducts(list);
  renderProduk();
};

// ==========================================
// Export Products
// ==========================================
btnExport.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(getProducts(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'products.json';
  document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
});

// ==========================================
// Authentication Logic
// ==========================================
function findUserByLogin(val) {
  const users = readUsers();
  return users.find(u => u.username === val || u.email === val);
}

btnRegister.addEventListener('click', () => {
  regError.textContent = '';
  const name = regName.value.trim();
  const email = regEmail.value.trim().toLowerCase();
  const username = regUsername.value.trim();
  const pass = regPass.value;

  if (!name || !email || !username || !pass)
    return regError.textContent = 'Lengkapi semua field.';
  if (pass.length < 6)
    return regError.textContent = 'Password minimal 6 karakter.';
  if (!/^\S+@\S+\.\S+$/.test(email))
    return regError.textContent = 'Email tidak valid.';

  const users = readUsers();
  if (users.find(u => u.email === email)) return regError.textContent = 'Email sudah terdaftar.';
  if (users.find(u => u.username === username)) return regError.textContent = 'Username sudah dipakai.';

  const user = { id: Date.now(), name, email, username, pass };
  users.push(user); writeUsers(users);
  setCurrent({ id: user.id, name: user.name, email: user.email, username: user.username });
  onLogin(user);
});

btnLogin.addEventListener('click', () => {
  loginError.textContent = '';
  const val = loginUser.value.trim().toLowerCase();
  const pass = loginPass.value;
  if (!val || !pass) return loginError.textContent = 'Isi username/email dan password.';

  const users = readUsers();
  const found = users.find(u => (u.email.toLowerCase() === val || u.username.toLowerCase() === val) && u.pass === pass);
  if (!found) return loginError.textContent = 'Username/email atau password salah.';

  setCurrent({ id: found.id, name: found.name, email: found.email, username: found.username });
  onLogin(found);
});

btnCreateDemo.addEventListener('click', () => {
  const users = readUsers();
  if (!users.find(u => u.email === 'demo@cuk.dev')) {
    const demo = { id: Date.now(), name: 'Demo User', email: 'demo@cuk.dev', username: 'demo', pass: 'demo123' };
    users.push(demo); writeUsers(users);
    alert('Akun demo dibuat: demo / demo123');
  } else alert('Akun demo sudah ada (demo / demo123)');
});

qs('#toRegister').addEventListener('click', e => {
  e.preventDefault();
  loginBox.classList.add('hidden');
  registerBox.classList.remove('hidden');
});

btnBackToLogin.addEventListener('click', () => {
  registerBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
});

qs('#closeAuth').addEventListener('click', () => {
  authOverlay.classList.add('hidden');
  authOverlay.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
});

function onLogin(user) {
  hideAuthOverlay();
  userArea.classList.remove('hidden');
  renderProduk();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function doLogout() {
  if (!confirm('Keluar dari akun?')) return;
  clearCurrent();
  userArea.classList.add('hidden');
  showAuthOverlay();
}

if (logoutBtn) logoutBtn.addEventListener('click', doLogout);
if (navKeluar) navKeluar.addEventListener('click', doLogout);

// ==========================================
// Init on Load
// ==========================================
(function init() {
  const cur = getCurrent();
  if (cur) {
    userArea.classList.remove('hidden');
    hideAuthOverlay();
  } else {
    showAuthOverlay();
  }
  renderProduk();
  lucide.createIcons();
})();

// ==========================================
// Keyboard: Enter to Submit
// ==========================================
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (!loginBox.classList.contains('hidden')) btnLogin.click();
    else if (!registerBox.classList.contains('hidden')) btnRegister.click();
  }
});

// ==========================================
// Prevent Dashboard Access if Logged Out
// ==========================================
window.addEventListener('beforeunload', () => {
  // just ensure current state is saved
});

window.addEventListener('DOMContentLoaded', () => {
  const cur = getCurrent();
  if (!cur) showAuthOverlay();
});
