import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card">
      <h4 className="project-title">{project.title}</h4>
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack-container">
        {project.techStack.map(skill => (
          <span key={skill} className="tech-skill">
            {skill}
          </span>
        ))}
      </div>
      
      {isExpanded && (
        <div className="project-details">
          <p className="project-details-text">{project.details}</p>
          <div className="button-container">
            <button 
              onClick={() => setIsExpanded(false)} 
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <hr className="divider" />
      {!isExpanded && (
        <div className="button-container">
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            GitHub
          </a>
          <button 
            onClick={() => setIsExpanded(true)} 
            className="expand-button"
          >
            Expand Details ✨
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
