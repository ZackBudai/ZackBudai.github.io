import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/carousel.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

interface Props {
  projects: Project[];
}

const Carousel: React.FC<Props> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create scroll index
  const progress = useTransform(scrollYProgress, [0, 1], [0, projects.length]);

  return (
    <div className="carousel-container" ref={containerRef}>
      <motion.div 
        className="carousel-wrapper"
        style={{ 
          perspective: 1200,
          transformStyle: 'preserve-3d'
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flap"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
              zIndex: projects.length - index
            }}
            animate={{
              rotateX: progress.get() >= index && progress.get() < index + 1 
                ? (progress.get() - index) * -180 
                : progress.get() <= index 
                  ? 0 
                  : -180,
              opacity: progress.get() >= index && progress.get() < index + 1 ? 1 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div 
              className="flap-image" 
              style={{ backgroundImage: `url(${project.image})` }} 
            />
            
            <div className="flap-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="flap-buttons">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flap-button"
                  >
                    Live Demo
                  </a>
                )}
                
                {project.codeUrl && (
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flap-button secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="scroll-indicator">
        <p>Scroll to flip through projects</p>
        <div className="scroll-arrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 13L12 20L19 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;