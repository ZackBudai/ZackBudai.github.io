import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  reflection: string;
  liveUrl?: string;
  liveUrls?: {
    player?: string;
    spectator?: string;
  };
  image?: string;
}

type ProjectsMap = {
  [key: string]: Project;
};

const projectDetails: ProjectsMap = {
  'particle-universe': {
    title: '3D Particle Universe',
    description: `A fun concept multiplayer space combat game featuring a static particle universe accessed through two distinct interfaces: hashedcookies.com/stars for player interactions and hashedcookies.com/camera for spectator views. Built with a client-server architecture using a central game server and plain HTML/JS client.`,
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
    image: '/images/particle-universe.png',
    liveUrls: {
      player: 'https://hashedcookies.com/stars',
      spectator: 'https://hashedcookies.com/camera'
    },
    reflection: `Working on the Particle Universe project presented me with the unique challenge of developing a multiplayer game system from scratch. The situation demanded creating an engaging space combat experience while managing real-time networking and state synchronization. Using only my personal development environment and working independently, I had to tackle both client and server-side challenges. My task was to create a multiplayer space combat game that could support multiple concurrent players, implement real-time interactions, and provide both player and spectator views - all while maintaining performance and preventing cheating. To accomplish this, I leveraged Node.js for the server architecture, implementing WebSocket connections for real-time communication, and developed a lightweight HTML/JS client using Three.js for basic rendering. I created a central game server to manage state and handle player interactions, while implementing client-side prediction to ensure smooth gameplay. The result was a functional multiplayer game system that successfully demonstrated real-time interaction capabilities, with the dual-interface approach effectively serving both players and spectators. The project's outcome showed that complex multiplayer systems could be built with relatively simple technologies when properly architected. Through this experience, I gained valuable insights into networked application architecture, real-time data synchronization, and the importance of separating concerns between client and server code. I learned to make strategic technical decisions, such as choosing simpler graphics solutions to focus on core functionality, and how to design systems that can serve multiple purposes efficiently. These lessons have significantly shaped my approach to system architecture and will influence my future projects, particularly in areas requiring real-time data handling and multi-user interactions.`
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
    liveUrl: 'https://zackbudai.github.io',
    reflection: `Developing my portfolio website presented a unique opportunity to showcase both my technical skills and design sensibilities. The situation required creating a professional platform that would effectively communicate my capabilities while demonstrating modern web development practices. Working independently with current web technologies, I needed to design and implement a website that would stand out visually while maintaining excellent performance and accessibility. My task encompassed creating an engaging user experience, implementing smooth transitions and animations, and ensuring the site worked flawlessly across all devices. To achieve these goals, I chose to build the site using React 19 and TypeScript, focusing on component reusability and type safety. I implemented custom animations using Framer Motion, created a unique 3D rotating panel design, and developed a comprehensive glassmorphic UI system. I also implemented proper SEO practices and established an automated deployment pipeline using GitHub Actions. The result is a highly polished, professional portfolio that effectively communicates my skills and achievements while providing an engaging user experience. The site's unique visual style and smooth interactions have received positive feedback, while its modular structure makes it easy to maintain and update. This project taught me valuable lessons about balancing aesthetic design with technical performance, the importance of component architecture in modern web development, and the role of thoughtful animations in user experience. I gained practical experience in TypeScript, state management, and animation techniques, while also learning to make design decisions that enhance rather than hinder usability. These insights continue to influence my approach to web development, particularly in creating interfaces that are both visually impressive and functionally sound.`
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
    image: '/images/graph-project.png',
    reflection: `The Graph-Based Markdown and Jupyter Workspace project emerged from the need to create a more intuitive way to manage and navigate complex documentation and code relationships. The situation involved developing a sophisticated system that could handle multiple file types and make their relationships visible and navigable. Working in a development environment focused on knowledge management tools, I needed to create a solution that would seamlessly integrate different content types while providing an intuitive interface for users. My task was to develop a workspace environment that could handle Markdown documentation, Jupyter notebooks, and visualize the relationships between different pieces of content in a meaningful way. To accomplish this, I implemented a graph visualization system using D3.js to represent document relationships, integrated Jupyter notebook support for interactive code execution, and developed a custom Markdown processing system. I also created real-time collaboration features using WebSocket connections and implemented an advanced search system for content discovery. The finished system successfully combines document management with interactive coding capabilities, making it easier for teams to maintain and navigate complex documentation. The graph-based interface provides intuitive navigation through related documents, while real-time collaboration features enable effective team coordination. Through this project, I gained deep insights into complex system architecture and the challenges of integrating different technologies. I learned valuable lessons about data visualization, real-time collaboration systems, and the importance of user experience in technical tools. The experience of working with multiple file formats and creating intuitive navigation systems has prepared me for future projects involving complex data relationships and user interactions, particularly in tools designed for technical users.`
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
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link">
                    Visit Live Project →
                  </a>
                )}
                {project.liveUrls?.player && (
                  <a href={project.liveUrls.player} target="_blank" rel="noopener noreferrer" className="project-live-link">
                    Play Game →
                  </a>
                )}
                {project.liveUrls?.spectator && (
                  <a href={project.liveUrls.spectator} target="_blank" rel="noopener noreferrer" className="project-live-link">
                    Watch Live →
                  </a>
                )}
              </div>
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

            <div className="project-section">
              <h2>Reflections</h2>
              <p>{project.reflection}</p>
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