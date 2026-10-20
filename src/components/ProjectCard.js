import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { tagColors } from '../data/projects';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card ${project.highlight ? 'project-card--highlight' : ''}`}>
      {project.architecture && (
        <div className="project-card__architecture">
          <div className="architecture-header">
            <span className="architecture-label">System Flow</span>
          </div>
          <div className="architecture-flow">
            {project.architecture.map((node, i) => (
              <React.Fragment key={node}>
                <span className="architecture-node">{node}</span>
                {i < project.architecture.length - 1 && (
                  <span className="architecture-arrow">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="project-card__header">
        <span className={`project-tag ${tagColors[project.tag] || 'tag-default'}`}>{project.tag}</span>
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            title="View on GitHub"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>
      <h4 className="project-card__title">{project.title}</h4>
      <p className="project-card__desc">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
      {expanded && (
        <div className="project-card__details">
          <p>{project.details}</p>
        </div>
      )}
      <button
        type="button"
        className="expand-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show less ↑' : 'Read more ↓'}
      </button>
    </div>
  );
}
