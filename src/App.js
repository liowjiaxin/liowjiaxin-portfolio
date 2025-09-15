import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

const App = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About Me</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">Projects</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">Skills</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
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
        <section id = "about" className="card">
          <h3 className="section-title">About Me</h3>
          <p>
            I'm a Computer Science graduate with a strong focus on artificial intelligence and software engineering. I am passionate about leveraging my skills to build intelligent systems and solve complex, real-world problems. My experience spans from academic research projects to practical application development.
          </p>
        </section>

        {/* Projects */}
        <section id = "projects" className="card">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="card">
          <h3 className="section-title">Skills</h3>
          <div className="skills-list">
            {['Python', 'JavaScript', 'React', 'TensorFlow', 'PyTorch', 'SQL', 'Git'].map(skill => (
              <span key={skill} className="skills-list-item">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id = "contact" className="card">
          <h3 className="section-title">Contact</h3>
          <div className="contact-info">
            <p>Email: <a href="mailto:liowjiaxin.ljx@email.com" className="contact-link">liowjiaxin.ljx@email.com</a></p>
            <p>GitHub: <a href="https://github.com/liowjiaxin" className="contact-link" target="_blank" rel="noopener noreferrer">liowjiaxin</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/jiaxinliow" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
