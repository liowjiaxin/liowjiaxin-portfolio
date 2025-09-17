import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px' // triggers when section is in the middle of screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a
              href="#about"
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => scrollToSection('projects')}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#honours"
              onClick={() => scrollToSection('honours')}
              className={`nav-link ${activeSection === 'honours' ? 'active' : ''}`}
            >
              Honours
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => scrollToSection('skills')}
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Container */}
      <div className="container">
        {/* Header */}
        <header>
          <h1 className="header-title">Liow Jia Xin</h1>
          <h2 className="header-subtitle">Computer Science Graduate | AI Enthusiast</h2>
        </header>

        {/* About Me */}
        <section id="about" className="card">
          <h3 className="section-title">About Me</h3>
          <p>
            I am a First-Class Honours graduate in Computer Science, specializing in Artificial
            Intelligence. I am passionate about leveraging my skills to build intelligent systems
            and solve complex, real-world problems. My experience spans from academic research to
            practical application development.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="card">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Honours */}
        <section id="honours" className="card">
          <h3 className="section-title">Honours and Awards</h3>
          <ul>
            <li>
              <b>First-Class Honours</b> – BSc Computer Science with Artificial Intelligence,
              University of Nottingham Malaysia (2025)
            </li>
            <li>
              <b>Finalist, PayHack 25 Hackathon</b> (Consolation Award) – Organized by PayNet in
              collaboration with Ant International and supported by APU, (2025)
              <br />
              Developed an AI-driven solution addressing MSME onboarding in QR payment.
            </li>
            <li>
              <b>Straight A’s, SPM</b> – Awarded for achieving 10A’s in national examinations (2019)
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="card">
          <h3 className="section-title">Skills</h3>
          <div className="skills-list">
            {['Python', 'JavaScript', 'React', 'TensorFlow', 'PyTorch', 'SQL', 'Git'].map((skill) => (
              <span key={skill} className="skills-list-item">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="card">
          <h3 className="section-title">Contact</h3>
          <div className="contact-info">
            <p>
              Email:{' '}
              <a href="mailto:liowjiaxin.ljx@email.com" className="contact-link">
                liowjiaxin.ljx@email.com
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/liowjiaxin"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                liowjiaxin
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/jiaxinliow"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
