import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  const { scrollY } = useScroll();
  
  // Create smoother rotation animation with adjusted sensitivity
  const rotation = useSpring(
    useTransform(scrollY, 
      [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
      [0, 720] // Increased rotation range for more dramatic effect
    ),
    { stiffness: 40, damping: 20 } // Adjusted spring physics for smoother motion
  );

  // Add subtle tilt effect based on scroll position
  const tiltX = useSpring(
    useTransform(scrollY,
      [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
      [-5, 5]
    ),
    { stiffness: 100, damping: 30 }
  );

  // Helper function to position items in 3D space
  const positionItem = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 400; // Adjust this value to change the carousel size
    const x = radius * Math.sin(angle);
    const z = radius * Math.cos(angle);
    return { x, z, rotateY: (index / total) * 360 };
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <motion.div 
        className="carousel" 
        style={{ 
          rotateY: rotation,
          rotateX: tiltX,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
      >
        {projects.map((project, index) => {
          const { x, z, rotateY } = positionItem(index, projects.length);
          
          return (
            <motion.div
              key={project.id}
              className="flap"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                x,
                z,
                rotateY: `${rotateY}deg`,
                translateX: '-50%',
                translateY: '-50%',
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 1,
                transition: { duration: 0.2 }
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
        <p>Scroll to explore projects</p>
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