const experiences = [
  {
    role: 'Senior Product Development Officer',
    company: 'PT. GrahaInformatika Nusantara',
    period: 'Oktober 2021 – Sekarang',
    type: 'Full-time',
    color: '#6c63ff',
    desc: 'Menganalisis sistem, merancang database, mengembangkan API dan frontend, serta melakukan maintenance dan pengembangan sistem.',
    projects: [
      { name: 'Hera Telkomsel Dashboard', tags: ['Laravel', 'Next.js'] },
      { name: 'Damia Web & API – Sistem Kepegawaian', tags: ['React.js', 'Laravel'] },
      { name: 'HRIS Web & API', tags: ['Next.js', 'Express.js'] },
      { name: 'Main Door Access API', tags: ['Spring Boot'] },
      { name: 'Meeting Room API & App', tags: ['Express.js', 'React Native'] },
      { name: 'Visitor App & API', tags: ['Flutter', 'Golang'] },
      { name: 'Server Monitoring Web', tags: ['Next.js', 'Express.js'] },
      { name: 'WhatsApp Blast Web & API', tags: ['Express.js', 'React.js'] },
      { name: 'Meeting Online Web, App, API', tags: ['React.js', 'Express.js', 'React Native'] },
      { name: 'Job Portal Web & API', tags: ['Express.js', 'React.js'] },
    ],
  },
  {
    role: 'Fullstack Programmer',
    company: 'PT. Devond Teknologi',
    period: 'Agustus 2019 – Oktober 2021',
    type: 'Full-time',
    color: '#00d4ff',
    desc: 'Menganalisis sistem, merancang database, mengembangkan API dan frontend, serta melakukan maintenance sistem.',
    projects: [
      { name: 'Web Marketplace Kingfruit', tags: ['Laravel'] },
      { name: 'Web Barugasikola', tags: ['Laravel', 'React.js', 'CodeIgniter'] },
      { name: 'Devond Commerce', tags: ['React.js'] },
    ],
  },
  {
    role: 'Programmer & IT Support',
    company: 'PT. Property Sanjaya Gemilang',
    period: 'Januari 2019 – Juli 2019',
    type: 'Full-time',
    color: '#00ff88',
    desc: 'Mengembangkan dan maintenance web/app, maintenance jaringan, serta membuat konten gambar dan video.',
    projects: [
      { name: 'Web Sanjaya Land', tags: ['SEO', 'WordPress'] },
      { name: 'Web Best Advertising', tags: ['SEO', 'WordPress'] },
      { name: 'Aplikasi Sanjaya Land', tags: ['React Native'] },
    ],
  },
  {
    role: 'Frontend Programmer',
    company: 'CV. Java Multi Mandiri',
    period: 'Desember 2017 – Desember 2018',
    type: 'Full-time',
    color: '#ff6b35',
    desc: 'Mengembangkan aplikasi frontend dan berkontribusi dalam pengembangan sistem internal perusahaan.',
    projects: [
      { name: 'Aplikasi Approval', tags: ['Laravel'] },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">// experience</div>
      <h2 className="section-title">Career <span>Timeline</span></h2>
      <p className="section-desc">
        Perjalanan karir dari frontend programmer hingga senior product development officer dengan pengalaman di berbagai industri.
      </p>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '28px',
          top: 0, bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, #6c63ff, #00d4ff, #00ff88, #ff6b35)',
          opacity: 0.3,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ display: 'flex', gap: '32px', paddingLeft: '16px' }}>
              {/* Dot */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '24px', height: '24px',
                  borderRadius: '50%',
                  background: exp.color,
                  border: '3px solid var(--bg-primary)',
                  boxShadow: `0 0 16px ${exp.color}66`,
                  marginTop: '8px',
                }} />
              </div>

              {/* Card */}
              <div className="card" style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '4px' }}>{exp.role}</h3>
                    <div style={{ color: exp.color, fontWeight: 600, fontSize: '14px' }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      color: '#8888aa',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      marginBottom: '6px',
                    }}>
                      {exp.period}
                    </div>
                    <span className="tag tag-purple" style={{ fontSize: '11px' }}>{exp.type}</span>
                  </div>
                </div>

                <p style={{ color: '#8888aa', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{exp.desc}</p>

                {/* Projects list */}
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: exp.color, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  // projects
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.projects.map((proj, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{ color: exp.color, fontSize: '12px' }}>▸</span>
                      <span style={{ fontSize: '14px', color: '#ccccdd', flex: 1 }}>{proj.name}</span>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {proj.tags.map(tag => (
                          <span key={tag} style={{
                            padding: '2px 8px',
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            borderRadius: '4px',
                            fontSize: '11px',
                            color: exp.color,
                            fontWeight: 500,
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
