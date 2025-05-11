import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

type ProjectsMap = {
  [key: string]: Project;
};

const projectDetails: ProjectsMap = {
  'graph-markdown-jupyter': {
    title: 'Graph-Based Markdown and Jupyter Workspace',
    description: `A sophisticated workspace environment that combines the power of graph-based navigation with Markdown documentation and Jupyter notebooks. This innovative system allows users to create, navigate, and understand complex documentation and code relationships through an intuitive graph interface.`,
    features: [
      'Interactive graph visualization of document relationships',
      'Seamless integration of Markdown documentation',
      'Native Jupyter notebook support',
      'Real-time collaboration features',
      'Advanced search and navigation capabilities',
      'Custom graph layouts and filtering'
    ],
    technologies: [
      'React for the frontend interface',
      'D3.js for graph visualizations',
      'Jupyter integration',
      'Markdown processing',
      'WebSocket for real-time updates'
    ]
  }
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = id ? projectDetails[id] : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="project-details"
    >
      <NavMenu />
      <div className="project-content">
        {project ? (
          <>
            <h1>{project.title}</h1>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            
            <div className="project-section">
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>Technologies Used</h2>
              <ul>
                {project.technologies.map((tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The requested project could not be found.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};