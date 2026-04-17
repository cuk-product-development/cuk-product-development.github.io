import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">{'<MEP />'}</div>
      <ul className="nav-links">
        {['home', 'skills', 'experience', 'projects', 'education', 'contact'].map(link => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <a href="mailto:echorockers06@gmail.com" className="nav-cta">Hire Me</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1e1e35',
      padding: '32px 40px',
      textAlign: 'center',
      color: '#555570',
      fontSize: '13px',
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <span style={{ color: '#6c63ff' }}>{'// '}</span>
      Built with React + Vite by Mohamad Eko Prasetyo, S.Kom
      <span style={{ color: '#6c63ff' }}>{' — '}</span>
      {new Date().getFullYear()}
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
