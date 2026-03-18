import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Automated Exam Marking System',
    tag: 'Final Year Project',
    description: 'Automated grading system using Retrieval-Augmented Generation and LLMs. Grading within 3 points of human markers with BLEURT-validated feedback.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Docker', 'Gemini'],
    details: 'Developed a back-end with FastAPI and a front-end interface, containerized with Docker for deployment. Integrated RAG pipelines with Gemini LLM via LangChain to automate grading and generate detailed feedback. Used FAISS for semantic retrieval, ensuring scalability and robustness.',
    repoLink: 'https://github.com/liowjiaxin/FYP-AutomatedMarking',
    highlight: true,
  },
  {
    id: 2,
    title: 'TDSB Unified Deployment',
    tag: 'Client Project',
    description: 'Hybrid cloud/local RPA platform for truck dock slot booking. Flask command center + Selenium bots secured with HMAC tokens and PyArmor obfuscation.',
    techStack: ['Python', 'Selenium', 'Flask', 'PyArmor', 'Pandas', 'Render'],
    details: 'Built a cloud command center on Render with SSE live log streaming and HMAC-signed handshake tokens. Local bots run as obfuscated EXE files registered via custom URI protocol. Eliminated 100% of manual booking data entry for a logistics client.',
    highlight: true,
  },
  {
    id: 3,
    title: 'Shipment Data Extractor',
    tag: 'Client Project',
    description: 'Python automation that parses DNATA and SATS logistics emails from Outlook via MAPI/COM, outputting structured Excel reports with zero credential storage.',
    techStack: ['Python', 'PyWin32', 'Pandas', 'OpenPyXL', 'Regex', 'Batch'],
    details: 'Implemented a factory pattern to detect email sender and delegate to specialized parsers (Regex for DNATA, positional-line for SATS). Used Integrated Windows Authentication to avoid password storage. Delivered as a one-click .bat launcher for non-technical clients.',
    highlight: true,
  },
  {
    id: 4,
    title: 'Shop RAGBot',
    tag: 'AI / NLP',
    description: 'Conversational chatbot for e-commerce product FAQs powered by RAG and LLaMA-3.1 via Groq API.',
    techStack: ['Python', 'RAG', 'LangChain', 'FAISS', 'Groq API', 'LLaMA-3.1'],
    details: 'Built a RAG pipeline for product FAQ answering. Integrated Groq API with LLaMA-3.1 for context-aware responses. Designed for extensibility with hybrid search over structured product data.',
    repoLink: 'https://github.com/liowjiaxin/rag-shop-bot',
  },
  {
    id: 5,
    title: 'Workflow Satisfiability Solver',
    tag: 'Algorithms',
    description: 'Constraint-based optimization encoding authorization, separation of duties, and precedence rules using OR-Tools and Z3.',
    techStack: ['Python', 'OR-Tools', 'Z3', 'Constraint Programming'],
    details: 'Solved the Workflow Satisfiability Problem by encoding security policies into a constraint programming framework. Achieved efficient performance across varying workflow sizes with integer and array-based variable representations.',
    repoLink: 'https://github.com/liowjiaxin/workflow-satisfiability-solver',
  },
  {
    id: 6,
    title: 'Smart Traffic Light System',
    tag: 'Reinforcement Learning',
    description: 'RL and PPO agents in SUMO simulator for adaptive traffic signal control with emergency vehicle handling.',
    techStack: ['Python', 'TensorFlow', 'SUMO', 'Reinforcement Learning', 'PPO'],
    details: 'Developed RL and PPO agents to dynamically adjust signal timings and reduce urban congestion. System adapts to real-time traffic density and handles emergency vehicle priority.',
    repoLink: 'https://github.com/mmmchu/COMP3071_Smart-Traffic-Light',
  },
  {
    id: 7,
    title: 'Exam Timetabling Solver',
    tag: 'Algorithms',
    description: 'Z3 SMT solver for conflict-free exam schedules with room capacity, invigilator constraints, and a PyQt GUI.',
    techStack: ['Python', 'Z3', 'PyQt', 'SMT Solving'],
    details: 'Modeled constraints such as room capacity, invigilator availability, and student fairness. Developed a PyQt GUI to visualize exam schedules, student timetables, and invigilator assignments.',
    repoLink: 'https://github.com/liowjiaxin/z3-exam-scheduler',
  },
  {
    id: 8,
    title: 'Smart Fridge Application',
    tag: 'IoT',
    description: 'IoT-powered fridge with camera-based food recognition, inventory tracking, expiry alerts, and recipe suggestions.',
    techStack: ['Python', 'Raspberry Pi', 'Computer Vision', 'Mobile App', 'IoT'],
    details: 'Implemented image classification to recognize food items and auto-update inventory. Built a mobile app for real-time access and expiry alerts. Coordinated AI, backend, and frontend integration.',
  },
  {
    id: 9,
    title: 'Flower Segmentation Pipeline',
    tag: 'Computer Vision',
    description: 'OpenCV pipeline using thresholding, morphology, and contour filtering achieving >85% mean IoU.',
    techStack: ['Python', 'OpenCV', 'Computer Vision'],
    details: 'Applied classical CV techniques to segment flowers from complex backgrounds. Achieved >85% mean IoU for agricultural and research dataset analysis.',
    repoLink: 'https://github.com/liowjiaxin/flower-segmentation-pipeline',
  },
];

const skills = {
  'AI / ML': ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'RAG', 'FAISS', 'Reinforcement Learning'],
  'Automation': ['Selenium', 'PyWin32', 'Pandas', 'OpenPyXL', 'Batch Scripting'],
  'Web': ['React', 'JavaScript', 'FastAPI', 'Flask', 'HTML', 'CSS', 'PHP'],
  'Tools': ['Docker', 'Git', 'SQL', 'PyArmor', 'Z3', 'OR-Tools'],
};

const tagColors = {
  'Final Year Project': 'tag-fyp',
  'Client Project': 'tag-client',
  'AI / NLP': 'tag-ai',
  'Algorithms': 'tag-algo',
  'Reinforcement Learning': 'tag-rl',
  'IoT': 'tag-iot',
  'Computer Vision': 'tag-cv',
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`project-card ${project.highlight ? 'project-card--highlight' : ''}`}>
      <div className="project-card__header">
        <span className={`project-tag ${tagColors[project.tag] || 'tag-default'}`}>{project.tag}</span>
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="github-link" title="View on GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
        )}
      </div>
      <h4 className="project-card__title">{project.title}</h4>
      <p className="project-card__desc">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
      {expanded && (
        <div className="project-card__details">
          <p>{project.details}</p>
        </div>
      )}
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less ↑' : 'Read more ↓'}
      </button>
    </div>
  );
};

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
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
          <div className="honours__list">
            <div className="honour-item">
              <span className="honour-item__year">Present<br />(3 mos)</span>
              <div>
                <h4 className="honour-item__title">Software Engineer</h4>
                <p className="honour-item__org">Logistics Automation & Integration</p>
                <div className="honour-item__desc" style={{ marginTop: '0.75rem' }}>
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
