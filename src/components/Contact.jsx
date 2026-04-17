import { useState } from 'react';

const WA_API_URL = 'https://aplikasi3.gratika.id/wa-blast/api/campaigns';
const MY_NUMBER = '6281289784331'; // nomor WA Eko

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    const msgText =
      `📩 *Pesan dari CV Website*\n\n` +
      `👤 *Nama:* ${form.name}\n` +
      `📱 *No HP:* ${form.phone}\n` +
      `📌 *Subject:* ${form.subject}\n\n` +
      `💬 *Pesan:*\n${form.message}`;

    try {
      const res = await fetch(WA_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `CV Contact - ${form.name}`,
          message: msgText,
          target_numbers: MY_NUMBER,
          auto_send: true,
        }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ paddingBottom: '120px' }}>
      <div className="section-label">// contact</div>
      <h2 className="section-title">Let's <span>Connect</span></h2>
      <p className="section-desc">
        Open to senior engineering roles, AI architecture consulting, and interesting collaborations.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Left */}
        <div>
          <div className="card" style={{ marginBottom: '20px', borderColor: 'rgba(108,99,255,0.3)' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#6c63ff', marginBottom: '16px' }}>
              $ whoami --contact
            </div>
            {[
              {  label: 'WhatsApp', value: '+62 812-8978-4331', color: '#25d366' },
              {  label: 'Email', value: 'echorockers06@gmail.com', color: '#6c63ff' },
              {  label: 'LinkedIn', value: 'https://www.linkedin.com/in/mohamad-eko-prasetyo-s-kom-3332b5217/', color: '#0077b5' },
              {  label: 'Youtube', value: 'https://www.youtube.com/@mohamadekoprasetyo6797', color: '#ff0000ff' },
              {  label: 'Location', value: 'Jakarta - Indonesia (Remote OK)', color: '#00ff88' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                {/* <span style={{ fontSize: '18px', width: '24px', textAlign: 'center' }}>{item.icon}</span> */}
                <div>
                  <div style={{ fontSize: '11px', color: '#555570', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: item.color, fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(0,212,255,0.05))',
            border: '1px solid rgba(37,211,102,0.2)',
            borderRadius: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25d366', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#25d366' }}>Pesan langsung via WhatsApp</span>
            </div>
            <p style={{ fontSize: '13px', color: '#8888aa', lineHeight: 1.6 }}>
              Form ini akan mengirim pesan langsung ke WhatsApp saya. Response time: within 24 hours.
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="card">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#6c63ff', marginBottom: '24px' }}>
            $ send_message --to eko --via whatsapp
          </div>

          <form onSubmit={handleSubmit}>
            {[
              { label: 'Nama', name: 'name', type: 'text', placeholder: 'Nama lengkap kamu' },
              { label: 'No. HP / WhatsApp', name: 'phone', type: 'tel', placeholder: '08xxxxxxxxxx' },
              { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Tentang apa?' },
            ].map(field => (
              <div key={field.name} style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#8888aa', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#e8e8f0',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={e => e.target.style.borderColor = '#6c63ff'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            ))}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#8888aa', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Pesan
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritain project atau kesempatan yang mau kamu tawarkan..."
                rows={4}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#e8e8f0',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = '#6c63ff'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div style={{ padding: '12px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '8px', color: '#25d366', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
                ✅ Pesan terkirim ke WhatsApp!
              </div>
            )}
            {status === 'error' && (
              <div style={{ padding: '12px', background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.3)', borderRadius: '8px', color: '#ff6b35', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
                ❌ Gagal kirim. Coba lagi atau hubungi langsung via WA.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '12px',
                background: status === 'loading'
                  ? 'rgba(255,255,255,0.1)'
                  : 'linear-gradient(135deg, #25d366, #128c7e)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '15px',
                fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {status === 'loading' ? (
                <> Mengirim...</>
              ) : (
                <> Kirim via WhatsApp</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
