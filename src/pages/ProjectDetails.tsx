import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  image?: string;
}

type ProjectsMap = {
  [key: string]: Project;
};

const projectDetails: ProjectsMap = {
  'particle-universe': {
    title: '3D Particle Universe',
    description: `An immersive multiplayer space combat game featuring a static particle universe accessed through two distinct interfaces: hashedcookies.com/stars for player interactions and hashedcookies.com/camera for spectator views. Built with a client-server architecture using a central game server and plain HTML/JS client.`,
    features: [
      'Centralized game server architecture',
      'Client-server state synchronization',
      'Static particle-based universe',
      'PvP combat system with hit detection',
      'Client-side prediction and reconciliation',
      'Server-side anti-cheat system',
      'Dual interface: player and spectator views'
    ],
    technologies: [
      'Node.js game server',
      'HTML5/JavaScript client',
      'Three.js for 3D rendering',
      'Plain JavaScript for game logic',
      'WebSocket for real-time communication',
      'Server-side game state management',
      'Custom anti-cheat implementation'
    ],
    image: '/images/particle-universe.png'
  },
  'portfolio-website': {
    title: 'Portfolio Website',
    description: `A modern, responsive portfolio website built with React and TypeScript. Features a unique 3D rotating panel design, smooth page transitions, and a glassmorphic UI that creates an engaging and interactive user experience.`,
    features: [
      'Interactive 3D rotating panels with motion tracking',
      'Smooth page transitions with fade effects',
      'Glassmorphic UI design with dynamic blur effects',
      'Responsive layout that works on all devices',
      'TypeScript for enhanced type safety and development experience',
      'Custom animation system for subtle visual feedback',
      'SEO optimized with meta tags and semantic HTML'
    ],
    technologies: [
      'React 19 with TypeScript',
      'Framer Motion for animations',
      'React Router v7 for navigation',
      'CSS3 with custom animations',
      'Vite for fast development and building',
      'GitHub Actions for automated deployment'
    ],
    image: '/images/portfolio-website.png',
    liveUrl: 'https://zackbudai.github.io'
  },
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
    ],
    liveUrl: 'https://hashedcookies.com/graph/',
    image: '/images/graph-project.png'
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
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            
            <div className="project-description">
              <p>{project.description}</p>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link">
                  Visit Live Project →
                </a>
              )}
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