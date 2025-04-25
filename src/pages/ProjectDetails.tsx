import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projectsData';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project with the matching ID
  const project = projects.find(p => p.id === id);
  
  // If no project is found, redirect to projects page
  if (!project) {
    return (
      <div className="project-not-found">
        <Navigation />
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/projects')}>
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <Navigation />
      <div className="project-content">
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="tech-tags">
            {project.technologies && project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        {project.image && (
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
        
        <div className="project-description">
          <h2>About this project</h2>
          <p>{project.longDescription}</p>
        </div>
        
        {project.externalLink && (
          <div className="project-links">
            <a 
              href={project.externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-button"
            >
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};