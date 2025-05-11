import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}

interface RotatingPanelProps {
  project: ProjectData;
}

export const RotatingPanel: React.FC<RotatingPanelProps> = ({ project }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [75, -75]);
  
  // Calculate opacity based on rotation angle
  const opacity = useTransform(rotateY, (value) => {
    // Convert rotation to absolute angle from facing forward (0 degrees)
    const absoluteAngle = Math.abs(value);
    // Linear fade from 1 at 0 degrees to 0 at 75 degrees
    return Math.max(0, 1 - (absoluteAngle / 75));
  });

  return (
    <div ref={containerRef} className="panel-container">
      <motion.div
        className="rotating-panel"
        style={{
          rotateY,
          opacity,
          x: '-50%',
          transformStyle: 'preserve-3d',
          transformOrigin: 'right center',
          pointerEvents: opacity.get() === 0 ? 'none' : 'auto', // Disable interactions when invisible
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="panel-content">
            <h2>{project.title}</h2>
            <div className="project-card">
              {project.image && <img src={project.image} alt={project.title} />}
              <p>{project.description}</p>
              <span className="project-link">Visit Project →</span>
            </div>
          </a>
        ) : (
          <Link to={`/project/${project.id}`} className="panel-content">
            <h2>{project.title}</h2>
            <div className="project-card">
              {project.image && <img src={project.image} alt={project.title} />}
              <p>{project.description}</p>
              <span className="project-link">View Project →</span>
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
};