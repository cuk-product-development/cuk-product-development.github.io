import { useState } from 'react';
import { createPortal } from 'react-dom';

function ImageModal({ src, alt, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '20px', right: '24px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: '40px', height: '40px',
          color: 'white', fontSize: '18px',
          cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 10000,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '92vw',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '12px',
          boxShadow: '0 0 80px rgba(108,99,255,0.4)',
          cursor: 'default',
          animation: 'fadeInUp 0.25s ease',
        }}
      />
      <div style={{
        position: 'absolute', bottom: '20px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '12px', color: 'rgba(255,255,255,0.35)',
        pointerEvents: 'none',
      }}>
        {alt} — klik di luar untuk tutup
      </div>
    </div>,
    document.body
  );
}

const projects = [
  {
    title: 'Hera – Telkomsel Dashboard',
    desc: 'Dashboard monitoring dan manajemen channel untuk Telkomsel. Menampilkan data real-time performa channel distribusi.',
    image: '/images/project/modchan - telkomsel dashboard.PNG',
    tags: ['Laravel', 'Next.js'],
    color: '#ff0080',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Damia Web & API – Sistem Kepegawaian',
    desc: 'Sistem kepegawaian lengkap mencakup data karyawan, absensi, penggajian, dan laporan SDM berbasis web.',
    image: '/images/project/web-damia transaksi hris.png',
    tags: ['React.js', 'Laravel', 'Express JS'],
    color: '#6c63ff',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Damia Transaksi HRIS',
    desc: 'Modul transaksi terintegrasi untuk sistem HRIS Damia, mengelola data keuangan karyawan dan reimbursement.',
    image: '/images/project/damia transaksi hris.png',
    tags: ['React.js', 'Laravel', 'Express JS'],
    color: '#00d4ff',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'HRIS Web & API',
    desc: 'Sistem Human Resource Information System full-stack dengan fitur absensi, cuti, payroll, dan manajemen karyawan.',
    image: '/images/project/hris.png',
    tags: ['Next.js', 'Express.js'],
    color: '#00ff88',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Main Door Access API',
    desc: 'API kontrol akses pintu utama terintegrasi dengan perangkat Hikvision untuk manajemen keamanan gedung.',
    image: '/images/project/hikvision_akses.jpeg',
    tags: ['Spring Boot'],
    color: '#6db33f',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Meeting Room API & App',
    desc: 'Sistem pemesanan ruang meeting dengan kalender terintegrasi, notifikasi real-time, dan manajemen fasilitas.',
    image: '/images/project/meetingroom.jpg',
    tags: ['Express.js', 'React Native'],
    color: '#ff6b35',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Meeting Online Web, App & API',
    desc: 'Platform meeting online lengkap dengan fitur video conference, chat, dan manajemen peserta rapat.',
    image: '/images/project/meeting online.png',
    tags: ['React.js', 'Express.js', 'React Native'],
    color: '#6c63ff',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'WhatsApp Blast Web & API',
    desc: 'Platform pengiriman pesan WhatsApp massal untuk kebutuhan marketing dan notifikasi bisnis dengan manajemen kampanye.',
    image: '/images/project/wa blast.png',
    tags: ['Express.js', 'React.js'],
    color: '#25d366',
    company: 'PT. Graha Informatika Nusantara',
  },
  {
    title: 'Job Portal Web & API',
    desc: 'Portal lowongan kerja dengan fitur pencarian canggih, manajemen lamaran, dan matching kandidat dengan perusahaan.',
    image: '/images/project/Job Portal.png',
    tags: ['Express.js', 'React.js','React Native'],
    color: '#00d4ff',
    company: 'CUK Prodev',
  },
  {
    title: 'Jasa Pengiriman',
    desc: 'Sistem manajemen jasa pengiriman barang dengan tracking real-time, manajemen kurir, dan laporan pengiriman.',
    image: '/images/project/Jasa Pengiriman.png',
    tags: ['Express.js', 'React.js'],
    color: '#ff9900',
    company: 'CUK Prodev',
  },
  {
    title: 'Web Marketplace Kingfruit',
    desc: 'Marketplace produk buah-buahan segar dengan fitur pemesanan online, manajemen stok, dan pengiriman terintegrasi.',
    image: '/images/project/Kingfruit Marketplace.png',
    tags: ['Laravel'],
    color: '#ffd700',
    company: 'PT. Devond Teknologi',
  },
  {
    title: 'Web Barugasikola',
    desc: 'Platform media sosial edukatif untuk komunitas pelajar dan pengajar. Fitur berbagi materi, diskusi, dan forum belajar.',
    image: '/images/project/Barugasikola Medsos.png',
    tags: ['Laravel', 'React.js', 'CodeIgniter'],
    color: '#00d4ff',
    company: 'PT. Devond Teknologi',
  },
  {
    title: 'Devond Commerce',
    desc: 'Platform e-commerce modern dengan fitur katalog produk, keranjang belanja, dan manajemen pesanan.',
    image: '/images/project/Devco Marketplace.PNG',
    tags: ['React.js','Laravel'],
    color: '#6c63ff',
    company: 'PT. Devond Teknologi',
  },
  {
    title: 'Web Sanjaya Land',
    desc: 'Website properti Sanjaya Land dengan katalog unit, informasi lokasi, dan optimasi SEO untuk meningkatkan traffic organik.',
    image: '/images/project/Sanjaya Land.jpg',
    tags: ['PHP Native','Laravel'],
    color: '#00ff88',
    company: 'PT. Property Sanjaya Gemilang',
  },
  {
    title: 'Web Best Advertising',
    desc: 'Website agensi periklanan dengan portofolio layanan dan optimasi SEO untuk meningkatkan visibilitas online.',
    image: '/images/project/Best Advertising.jpg',
    tags: ['PHP Native','Laravel'],
    color: '#ff6b35',
    company: 'PT. Property Sanjaya Gemilang',
  },
  {
    title: 'Aplikasi Sanjaya Land',
    desc: 'Aplikasi mobile untuk memudahkan calon pembeli melihat properti, simulasi KPR, dan menghubungi agen.',
    image: '/images/project/Sanjaya Land APP.jpg',
    tags: ['React Native'],
    color: '#61dafb',
    company: 'PT. Property Sanjaya Gemilang',
  },
  {
    title: 'POS Rumah Makan & Toko Sembako',
    desc: 'Aplikasi Point of Sale untuk rumah makan dan toko sembako. Fitur kasir, manajemen stok, dan laporan penjualan.',
    image: '/images/project/POS Rumah Makan dan Toko Sembako.png',
    tags: ['React Js', 'React Native', 'Express JS'],
    color: '#ff9900',
    company: 'CUK Prodev',
  },
  {
    title: 'Aplikasi Approval',
    desc: 'Sistem approval digital untuk alur persetujuan dokumen internal perusahaan dengan notifikasi dan tracking status.',
    image: '/images/project/pos.jpg',
    tags: ['Laravel'],
    color: '#8888aa',
    company: 'CV. Java Multi Mandiri',
  },
];

const ITEMS_PER_PAGE = 6;

const companyColors = {
  'PT. Graha Informatika Nusantara': '#c8f906ff',
  'PT. Devond Teknologi': '#00d4ff',
  'PT. Property Sanjaya Gemilang': '#00ff88',
  'CV. Java Multi Mandiri': '#ff6b35',
  'CUK Prodev': '#ffffffff',
};

export default function Projects() {
  const [page, setPage] = useState(1);
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null); // { src, alt }

  const companies = ['All', ...Object.keys(companyColors)];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.company === filter);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilter = (c) => { setFilter(c); setPage(1); };

  return (
    <section id="projects">
      {modal && <ImageModal src={modal.src} alt={modal.alt} onClose={() => setModal(null)} />}
      <div className="section-label">// projects</div>
      <h2 className="section-title">My <span>Projects</span></h2>
      <p className="section-desc">
        {projects.length} project nyata yang sudah dibangun dan di-deploy — dari marketplace, HRIS, POS, hingga sistem enterprise.
      </p>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {companies.map(c => (
          <button
            key={c}
            onClick={() => handleFilter(c)}
            style={{
              padding: '7px 16px',
              background: filter === c ? 'linear-gradient(135deg, #6c63ff, #00d4ff)' : 'rgba(255,255,255,0.04)',
              border: filter === c ? 'none' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              color: filter === c ? 'white' : '#8888aa',
              fontSize: '13px',
              fontWeight: filter === c ? 700 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {c === 'All' ? `All (${projects.length})` : c.replace('PT. ', '').replace('CV. ', '')}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {visible.map((p, i) => (
          <div
            key={p.title}
            className="card"
            style={{ padding: 0, overflow: 'hidden', cursor: 'default' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#0f0f1a' }}>
              <img
                src={p.image}
                alt={p.title}
                onClick={() => setModal({ src: p.image, alt: p.title })}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.4s ease',
                  transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'zoom-in',
                }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${p.color}33, transparent)`,
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.3s',
              }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
              }} />
              {/* Company badge */}
              <div style={{
                position: 'absolute', bottom: '10px', left: '10px',
                padding: '3px 10px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: '6px',
                fontSize: '10px',
                color: companyColors[p.company] || '#8888aa',
                fontWeight: 600,
                border: `1px solid ${companyColors[p.company]}33`,
              }}>
                {p.company.replace('PT. ', '').replace('CV. ', '')}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ color: '#8888aa', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px',
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}25`,
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: p.color,
                    fontWeight: 600,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: page === 1 ? '#555570' : '#e8e8f0',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              style={{
                width: '36px', height: '36px',
                background: page === n ? 'linear-gradient(135deg, #6c63ff, #00d4ff)' : 'rgba(255,255,255,0.04)',
                border: page === n ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: page === n ? 'white' : '#8888aa',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: page === n ? 700 : 400,
              }}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: page === totalPages ? '#555570' : '#e8e8f0',
              cursor: page === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            Next →
          </button>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#555570' }}>
        showing {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} projects
      </div>
    </section>
  );
}
