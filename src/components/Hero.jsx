import { useEffect, useRef, useState } from 'react';

const roles = [
  'Senior Product Development Officer',
  'Fullstack Developer',
  'Backend Engineer',
  'Mobile Developer',
  'System Analyst',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center', width: '100%' }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span className="tag tag-purple">⚡ Open to Opportunities</span>
            <span className="tag tag-green">💻 Fullstack Developer</span>
            <span className="tag tag-cyan">🏗️ System Analyst</span>
          </div>

          <h1 style={{ fontSize: '64px', fontWeight: 900, lineHeight: 1.05, marginBottom: '16px' }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Mohamad Eko
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Prasetyo, S.Kom
            </span>
          </h1>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '22px',
            color: '#8888aa',
            marginBottom: '24px',
            height: '32px',
          }}>
            <span style={{ color: '#6c63ff' }}>{'> '}</span>
            <span style={{ color: '#e8e8f0' }}>{displayed}</span>
            <span style={{ animation: 'blink 1s infinite', color: '#6c63ff' }}>|</span>
          </div>

          <p style={{ color: '#8888aa', fontSize: '17px', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}>
            S.Kom lulusan STIKOM Yos Sudarso Purwokerto dengan pengalaman 7+ tahun membangun sistem fullstack —
            dari backend Laravel & Express, frontend React & Next.js, hingga mobile React Native & Flutter.
            Saat ini sebagai Senior Product Development Officer di PT. GrahaInformatika Nusantara.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
            >
              View My Work
            </a>
            <a href="mailto:eko@example.com" style={{
              padding: '14px 32px',
              background: 'transparent',
              border: '1px solid rgba(108, 99, 255, 0.4)',
              borderRadius: '12px',
              color: '#e8e8f0',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(108, 99, 255, 0.4)'; e.target.style.transform = 'translateY(0)'; }}
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #1e1e35' }}>
            {[
              { num: '9+', label: 'Years Experience' },
              { num: '18+', label: 'Projects Shipped' },
              { num: '4', label: 'Companies' },
              { num: '3.64', label: 'IPK S.Kom' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #6c63ff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#555570', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Avatar card */}
        <div style={{ animation: 'float 4s ease-in-out infinite' }}>
          <div style={{
            width: '320px',
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.1))',
            border: '1px solid rgba(108,99,255,0.3)',
            borderRadius: '24px',
            padding: '32px',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '120px', height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(108,99,255,0.5)',
                boxShadow: '0 0 40px rgba(108,99,255,0.4)',
                margin: '0 auto 20px',
              }}>
                <img src="/images/person1.jpg" alt="Mohamad Eko Prasetyo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg,#6c63ff,#00d4ff)'; e.target.parentElement.innerHTML='<span style="font-size:48px;display:flex;align-items:center;justify-content:center;height:100%">👨‍💻</span>'; }} />
              </div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Mohamad Eko Prasetyo</div>
            <div style={{ color: '#8888aa', fontSize: '13px', marginBottom: '20px' }}>S.Kom — Sistem Informasi</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '📍', text: 'Indonesia' },
                { icon: '🎓', text: 'STIKOM Yos Sudarso Purwokerto' },
                { icon: '🏢', text: 'PT. GrahaInformatika Nusantara' },
                { icon: '⚡', text: 'Open to Opportunities' },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '8px', padding: '8px 12px',
                  fontSize: '13px', color: '#aaaacc',
                }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            {/* <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
              {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" style={{
                  padding: '6px 14px',
                  background: 'rgba(108,99,255,0.15)',
                  border: '1px solid rgba(108,99,255,0.2)',
                  borderRadius: '8px',
                  color: '#6c63ff',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.target.style.background = 'rgba(108,99,255,0.3)'}
                  onMouseLeave={e => e.target.style.background = 'rgba(108,99,255,0.15)'}
                >
                  {s}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
