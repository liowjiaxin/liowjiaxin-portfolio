import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // We check for both repoLink and link to ensure backward compatibility
  const githubLink = project.repoLink || (project.link && project.link.includes('github') ? project.link : null);
  const externalLink = project.link && !project.link.includes('github') ? project.link : null;

  return (
    <div className={`project-card ${isExpanded ? 'is-expanded' : ''}`}>
      <div className="project-card-header">
        <h4 className="project-title">{project.title}</h4>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack-container">
        {project.techStack.map(skill => (
          <span key={skill} className="tech-skill">
            {skill}
          </span>
        ))}
      </div>
      
      <div className={`project-details-wrapper ${isExpanded ? 'expanded' : ''}`}>
        <div className="project-details-inner">
          <div className="project-details">
            <p className="project-details-text">{project.details}</p>
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="social-link" title="Source Code">
              <FaGithub /> <span className="link-text">Code</span>
            </a>
          )}
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="social-link" title="Live Demo">
              <FaExternalLinkAlt /> <span className="link-text">Live</span>
            </a>
          )}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="expand-toggle-btn"
        >
          {isExpanded ? (
            <>Less <FaChevronUp className="btn-icon" /></>
          ) : (
            <>More <FaChevronDown className="btn-icon" /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
