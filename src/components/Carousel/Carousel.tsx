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

  // Create rotation based on scroll
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);
  const rotateX = useTransform(currentIndex, (value) => {
    const decimal = value % 1;
    return decimal * -180; // Rotate 180 degrees per panel
  });

  return (
    <div className="carousel-container" ref={containerRef}>
      <motion.div 
        className="carousel-wrapper"
        style={{ 
          perspective: 1200,
          transformStyle: 'preserve-3d'
        }}
      >
        {projects.map((project, index) => {
          // Calculate if this panel should be visible based on scroll position
          const isVisible = useTransform(currentIndex, (value) => {
            const decimal = value % 1;
            const currentWholeIndex = Math.floor(value);
            return currentWholeIndex === index || 
                   (decimal > 0 && currentWholeIndex + 1 === index);
          });

          return (
            <motion.div
              key={project.id}
              className="flap"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                rotateX: useTransform(currentIndex, (value) => {
                  if (Math.floor(value) === index) {
                    // Current panel rotates from 0 to -180
                    return (value % 1) * -180;
                  } else if (Math.floor(value) + 1 === index) {
                    // Next panel rotates from 180 to 0
                    return 180 - ((value % 1) * 180);
                  }
                  // Other panels stay at their rest position
                  return index > Math.floor(value) ? 180 : -180;
                }),
                opacity: isVisible,
                zIndex: projects.length - index
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
          );
        })}
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