const certifications = [
  { name: 'Laravel Framework', issuer: 'Self-certified', year: '2019', color: '#ff2d20', icon: '/images/laravel.png' },
  { name: 'React.js & Next.js', issuer: 'Self-certified', year: '2020', color: '#61dafb', icon: '/images/react.png' },
  { name: 'Node.js / Express.js', issuer: 'Self-certified', year: '2020', color: '#68a063', icon: '/images/nodeJS.png' },
  { name: 'Spring Boot', issuer: 'Self-certified', year: '2022', color: '#6db33f', icon: '/images/springBoot.png' },
  { name: 'Golang', issuer: 'Self-certified', year: '2022', color: '#00add8', icon: '/images/go.png' },
  { name: 'Docker & DevOps', issuer: 'Self-certified', year: '2023', color: '#2496ed', icon: '/images/docker.png' },
  { name: 'React Native', issuer: 'Self-certified', year: '2021', color: '#61dafb', icon: '/images/reactNative.png' },
  { name: 'PostgreSQL', issuer: 'Self-certified', year: '2021', color: '#336791', icon: '/images/postgres.png' },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">// education</div>
      <h2 className="section-title">Education & <span>Skills</span></h2>
      <p className="section-desc">
        Latar belakang akademik yang kuat di bidang Sistem Informasi, dikombinasikan dengan penguasaan teknologi modern.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Education */}
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#6c63ff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            // formal_education
          </div>

          <div className="card" style={{ borderColor: 'rgba(108,99,255,0.3)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '52px', height: '52px',
                background: 'rgba(108,99,255,0.15)',
                border: '1px solid rgba(108,99,255,0.3)',
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0,
              }}>
                🎓
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>S1 – Sistem Informasi</h3>
                <div style={{ color: '#6c63ff', fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>STIKOM Yos Sudarso Purwokerto</div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', color: '#8888aa' }}>2013 – 2017</span>
                  <span style={{
                    fontSize: '13px',
                    color: '#00ff88',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                  }}>
                    IPK: 3.64
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Lulus dengan predikat cumlaude',
                'Fokus pada pengembangan sistem informasi dan pemrograman',
                'Aktif dalam kegiatan organisasi kampus',
              ].map((h, j) => (
                <div key={j} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#aaaacc' }}>
                  <span style={{ color: '#6c63ff' }}>▸</span>
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack icons */}
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#00d4ff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            // tech_stack
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {[
              { name: 'PHP', img: '/images/php8.png', color: '#777bb4' },
              { name: 'JavaScript', img: '/images/js.png', color: '#f7df1e' },
              { name: 'TypeScript', img: '/images/ts.png', color: '#3178c6' },
              { name: 'Python', img: '/images/python.png', color: '#3776ab' },
              { name: 'Golang', img: '/images/go.png', color: '#00add8' },
              { name: 'React', img: '/images/react.png', color: '#61dafb' },
              { name: 'Next.js', img: '/images/nextJS.jpg', color: '#ffffff' },
              { name: 'Laravel', img: '/images/laravel.png', color: '#ff2d20' },
              { name: 'Node.js', img: '/images/nodeJS.png', color: '#68a063' },
              { name: 'Express', img: '/images/express.jpg', color: '#aaaaaa' },
              { name: 'Spring Boot', img: '/images/springBoot.png', color: '#6db33f' },
              { name: 'React Native', img: '/images/reactNative.png', color: '#61dafb' },
              { name: 'Docker', img: '/images/docker.png', color: '#2496ed' },
              { name: 'MySQL', img: '/images/mysql.png', color: '#4479a1' },
              { name: 'PostgreSQL', img: '/images/postgres.png', color: '#336791' },
              { name: 'Redis', img: '/images/redis.png', color: '#dc382d' },
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '10px 6px',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${tech.color}44`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <img src={tech.img} alt={tech.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
                <span style={{ fontSize: '10px', color: '#8888aa', textAlign: 'center' }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Certifications */}
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#00ff88', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            // tools_&_platforms
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {[
              { name: 'Git / GitHub / GitLab', img: '/images/github.png', color: '#f05032', desc: 'Version Control' },
              { name: 'Docker', img: '/images/docker.png', color: '#2496ed', desc: 'Containerization' },
              { name: 'Postman', img: '/images/postman.png', color: '#ff6c37', desc: 'API Testing' },
              { name: 'VS Code', img: '/images/visualcode.png', color: '#007acc', desc: 'Code Editor' },
              { name: 'Figma', img: '/images/figma.jpg', color: '#f24e1e', desc: 'UI/UX Design' },
              { name: 'Azure / Microsoft', img: '/images/azure.png', color: '#0078d4', desc: 'Cloud Platform' },
              { name: 'RabbitMQ', img: '/images/rabbit.png', color: '#ff6600', desc: 'Message Broker' },
              { name: 'ActiveMQ', img: '/images/activemq.png', color: '#cc0000', desc: 'Message Broker' },
              { name: 'Redis', img: '/images/redis.png', color: '#dc382d', desc: 'Cache / Queue' },
              { name: 'CI/CD Pipeline', img: '/images/CI.png', color: '#6c63ff', desc: 'DevOps' },
            ].map(tool => (
              <div key={tool.name} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '10px 14px',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${tool.color}44`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <img src={tool.img} alt={tool.name} style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '4px' }} onError={e => e.target.style.display = 'none'} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{tool.name}</div>
                  <div style={{ fontSize: '11px', color: '#555570' }}>{tool.desc}</div>
                </div>
                <div style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: tool.color,
                  boxShadow: `0 0 6px ${tool.color}`,
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
