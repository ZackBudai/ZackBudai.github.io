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
    offset: ["start start", "end end"]
  });

  // Create rotation transform that will be used for the carousel
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Helper function to position flaps in a 3D circle
  const positionFlap = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 500; // Adjust radius as needed
    const x = radius * Math.sin(angle);
    const z = radius * Math.cos(angle);
    return { x, z, angle: (index / total) * 360 };
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <motion.div 
        className="carousel" 
        style={{ 
          rotateY: rotation 
        }}
      >
        {projects.map((project, index) => {
          const { x, z, angle } = positionFlap(index, projects.length);
          
          return (
            <motion.div
              key={project.id}
              className="flap"
              style={{
                x,
                z,
                rotateY: `${angle}deg`,
                originZ: -400,
              }}
              whileHover={{ scale: 1.05 }}
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
        <p>Scroll to explore</p>
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