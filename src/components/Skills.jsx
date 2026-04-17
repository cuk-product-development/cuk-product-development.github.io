const skillCategories = [
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: '#6c63ff',
    skills: [
      { name: 'Laravel (PHP)', level: 92 },
      { name: 'Express.js (Node.js)', level: 88 },
      { name: 'Spring Boot (Java)', level: 78 },
      { name: 'Golang', level: 75 },
      { name: 'REST API Design', level: 92 },
      { name: 'CodeIgniter', level: 80 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: '#00d4ff',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Bootstrap / Tailwind', level: 85 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: '📱',
    color: '#00ff88',
    skills: [
      { name: 'React Native', level: 82 },
      { name: 'Flutter', level: 70 },
    ],
  },
  {
    title: 'Database & DevOps',
    icon: '🗄️',
    color: '#ff6b35',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 90 },
      { name: 'Redis', level: 80 },
      { name: 'SQL Server', level: 78 },
      { name: 'Docker', level: 80 },
      { name: 'RabbitMQ / ActiveMQ', level: 75 },
      { name: 'CI/CD Pipeline', level: 78 },
    ],
  },
];

import { useState } from 'react';

const techGroups = [
  {
    label: 'Languages',
    color: '#6c63ff',
    items: [
      { name: 'PHP', img: '/images/php8.png' },
      { name: 'JavaScript', img: '/images/js.png' },
      { name: 'TypeScript', img: '/images/ts.png' },
      { name: 'Python', img: '/images/python.png' },
      { name: 'Golang', img: '/images/go.png' },
    ],
  },
  {
    label: 'Frontend',
    color: '#00d4ff',
    items: [
      { name: 'React.js', img: '/images/react.png' },
      { name: 'Next.js', img: '/images/nextJS.jpg' },
      { name: 'HTML', img: '/images/html.png' },
      { name: 'CSS', img: '/images/css.png' },
    ],
  },
  {
    label: 'Backend',
    color: '#00ff88',
    items: [
      { name: 'Laravel', img: '/images/laravel.png' },
      { name: 'Node.js', img: '/images/nodeJS.png' },
      { name: 'Express', img: '/images/express.jpg' },
      { name: 'Spring Boot', img: '/images/springBoot.png' },
    ],
  },
  {
    label: 'Mobile',
    color: '#ff6b35',
    items: [
      { name: 'React Native', img: '/images/reactNative.png' },
      { name: 'Flutter', img: '/images/dev.png' },
    ],
  },
  {
    label: 'Database',
    color: '#ffd700',
    items: [
      { name: 'MySQL', img: '/images/mysql.png' },
      { name: 'PostgreSQL', img: '/images/postgres.png' },
      { name: 'Redis', img: '/images/redis.png' },
      { name: 'SQL Server', img: '/images/sqlserver.png' },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#ff0080',
    items: [
      { name: 'Docker', img: '/images/docker.png' },
      { name: 'GitHub', img: '/images/github.png' },
      { name: 'GitLab', img: '/images/gitlab.png' },
      { name: 'CI/CD', img: '/images/CI.png' },
      { name: 'RabbitMQ', img: '/images/rabbit.png' },
      { name: 'ActiveMQ', img: '/images/activemq.png' },
      { name: 'Azure', img: '/images/azure.png' },
      { name: 'Postman', img: '/images/postman.png' },
      { name: 'VS Code', img: '/images/visualcode.png' },
      { name: 'Figma', img: '/images/figma.jpg' },
    ],
  },
];

function TechCard({ tech, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '10px',
        padding: '18px 10px',
        background: hovered ? `${color}18` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? color + '55' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        cursor: 'default',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 24px ${color}25` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow dot top right */}
      {hovered && (
        <div style={{
          position: 'absolute', top: '-10px', right: '-10px',
          width: '40px', height: '40px',
          background: color,
          borderRadius: '50%',
          filter: 'blur(16px)',
          opacity: 0.3,
          pointerEvents: 'none',
        }} />
      )}
      <div style={{
        width: '44px', height: '44px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? `${color}22` : 'rgba(255,255,255,0.05)',
        borderRadius: '10px',
        transition: 'background 0.25s',
      }}>
        <img
          src={tech.img}
          alt={tech.name}
          style={{ width: '28px', height: '28px', objectFit: 'contain' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
      <span style={{
        fontSize: '11px',
        fontWeight: 600,
        color: hovered ? color : '#8888aa',
        textAlign: 'center',
        lineHeight: 1.3,
        transition: 'color 0.25s',
      }}>
        {tech.name}
      </span>
    </div>
  );
}

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '14px', color: '#ccccdd' }}>{name}</span>
        <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          borderRadius: '2px',
          boxShadow: `0 0 8px ${color}66`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// skills</div>
      <h2 className="section-title">Technical <span>Expertise</span></h2>
      <p className="section-desc">
        Pengalaman nyata di berbagai stack — dari backend Laravel & Express, frontend React & Next.js, mobile React Native & Flutter, hingga DevOps.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
        {skillCategories.map(cat => (
          <div key={cat.title} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '44px', height: '44px',
                background: `${cat.color}18`,
                border: `1px solid ${cat.color}33`,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>
                {cat.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{cat.title}</div>
                <div style={{ fontSize: '12px', color: cat.color, fontFamily: "'JetBrains Mono', monospace" }}>
                  {cat.skills.length} skills
                </div>
              </div>
            </div>
            {cat.skills.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
            ))}
          </div>
        ))}
      </div>

      {/* Tech stack grouped - premium grid */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#6c63ff', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
            // tech_stack
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700 }}>Tools & Technologies</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {techGroups.map(group => (
            <div key={group.label}>
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', fontWeight: 700,
                  color: group.color,
                  background: `${group.color}18`,
                  border: `1px solid ${group.color}33`,
                  padding: '3px 12px',
                  borderRadius: '20px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  {group.label}
                </span>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
              </div>

              {/* Grid cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '12px' }}>
                {group.items.map(tech => (
                  <TechCard key={tech.name} tech={tech} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
