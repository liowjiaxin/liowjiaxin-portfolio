import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { projects, skills } from './data/projects';
import ProjectCard from './components/ProjectCard';


export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-50% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = ['about', 'experience', 'projects', 'honours', 'skills', 'contact'];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar__inner">
          <span className="navbar__logo" onClick={() => scrollTo('about')}>JX</span>
          <ul className="navbar__links">
            {navItems.map(id => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`nav-btn ${activeSection === id ? 'nav-btn--active' : ''}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="mobile-nav-btn">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="main">
        {/* Hero */}
        <section className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">Hi, I'm</p>
            <h1 className="hero__name">Liow Jia Xin</h1>
            <h2 className="hero__role">CS Graduate · AI & Automation</h2>
            <p className="hero__bio">
              First-Class Honours in Computer Science (AI). I build intelligent automation systems,
              RAG pipelines, and real-world client software that ships.
            </p>
            <div className="hero__ctas">
              <button className="btn btn--primary" onClick={() => scrollTo('projects')}>See my work</button>
              <button className="btn btn--outline" onClick={() => scrollTo('contact')}>Get in touch</button>
            </div>
          </div>
          <div className="hero__badge-grid">
            {['Python', 'RAG', 'Selenium', 'React', 'Flask', 'TensorFlow'].map(s => (
              <span key={s} className="hero__badge">{s}</span>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h3 className="section__title">About Me</h3>
          <div className="about__grid">
            <div className="about__text">
              <p>
                I'm a Computer Science graduate specialising in Artificial Intelligence from the
                University of Nottingham Malaysia (First-Class Honours, 2025). I'm passionate about
                bridging the gap between AI research and practical, deployable software.
              </p>
              <p>
                My recent work spans logistics automation for real clients, RAG-based LLM systems,
                and constraint programming for scheduling problems. I care deeply about clean
                architecture, client-ready delivery, and writing code that actually solves problems.
              </p>
            </div>
            <div className="about__stats">
              <div className="stat-card"><span className="stat-card__num">9+</span><span className="stat-card__label">Projects shipped</span></div>
              <div className="stat-card"><span className="stat-card__num">2</span><span className="stat-card__label">Client deployments</span></div>
              <div className="stat-card"><span className="stat-card__num">1st</span><span className="stat-card__label">Class Honours</span></div>
              <div className="stat-card"><span className="stat-card__num">2025</span><span className="stat-card__label">Graduate</span></div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h3 className="section__title">Work Experience</h3>
          <p className="section__sub">Professional software engineering and automation implementations.</p>
          <div className="experience__list">
            <div className="experience-item">
              <span className="experience-item__period">Present<br />(3 mos)</span>
              <div>
                <h4 className="experience-item__title">Software Engineer</h4>
                <p className="experience-item__org">Logistics Automation & Integration</p>
                <div className="experience-item__desc" style={{ marginTop: '0.75rem' }}>
                  <p style={{ marginBottom: '0.5rem' }}><strong>• TDSB Automation Bot:</strong> Developed a hybrid cloud/local RPA platform to automate truck dock slot booking logic, completely eliminating manual entry bottlenecks.</p>
                  <p style={{ marginBottom: '0.5rem' }}><strong>• Shipment Email Extractor:</strong> Engineered an autonomous Python solution that securely parses complex DNATA and SATS shipment emails straight from Outlook to format-structured Excel reports.</p>
                  <p><strong>• Fleet Management:</strong> Integrated command center operations, establishing active data pipelines and real-time visualization systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h3 className="section__title">Projects</h3>
          <p className="section__sub">A mix of academic research, client work, and personal builds.</p>
          <div className="projects__grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* Honours */}
        <section id="honours" className="section">
          <h3 className="section__title">Honours & Awards</h3>
          <div className="honours__list">
            <div className="honour-item">
              <span className="honour-item__year">2025</span>
              <div>
                <h4 className="honour-item__title">First-Class Honours — BSc Computer Science (AI)</h4>
                <p className="honour-item__org">University of Nottingham Malaysia</p>
              </div>
            </div>
            <div className="honour-item">
              <span className="honour-item__year">2025</span>
              <div>
                <h4 className="honour-item__title">Finalist — PayHack 25 Hackathon (Consolation Award)</h4>
                <p className="honour-item__org">PayNet · Ant International · APU</p>
                <p className="honour-item__desc">Developed an AI-driven solution addressing MSME onboarding in QR payment systems.</p>
              </div>
            </div>
            <div className="honour-item">
              <span className="honour-item__year">2019</span>
              <div>
                <h4 className="honour-item__title">Straight A's — SPM (10A's)</h4>
                <p className="honour-item__org">National Examination, Malaysia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h3 className="section__title">Skills</h3>
          <div className="skills__grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skills__group">
                <h4 className="skills__category">{category}</h4>
                <div className="skills__tags">
                  {items.map(s => <span key={s} className="skill-badge">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h3 className="section__title">Contact</h3>
          <p className="section__sub">Open to full-time roles, freelance projects, and collaborations.</p>
          <div className="contact__links">
            <a href="mailto:liowjiaxin.ljx@gmail.com" className="contact-card">
              <span className="contact-card__icon"><FaEnvelope /></span>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">liowjiaxin.ljx@gmail.com</span>
            </a>
            <a href="https://github.com/liowjiaxin" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-card__icon"><FaGithub /></span>
              <span className="contact-card__label">GitHub</span>
              <span className="contact-card__value">github.com/liowjiaxin</span>
            </a>
            <a href="https://linkedin.com/in/jiaxinliow" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-card__icon"><FaLinkedin /></span>
              <span className="contact-card__label">LinkedIn</span>
              <span className="contact-card__value">linkedin.com/in/jiaxinliow</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React · Liow Jia Xin © 2025</p>
      </footer>
    </div>
  );
}
