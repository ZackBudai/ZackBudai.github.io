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
  
  // Helper function to position items in 3D space
  const positionItem = (index: number, total: number, progress: number) => {
    const verticalSpacing = 200; // Pixels between each card
    const totalHeight = verticalSpacing * (total - 1);
    const startY = -totalHeight / 2;
    
    // Calculate the center index based on scroll progress
    const centerIndex = progress * (total - 1);
    const distanceFromCenter = Math.abs(index - centerIndex);
    
    // Calculate y position
    const y = startY + (index * verticalSpacing);
    
    // Calculate z offset - items further from center move back
    const z = -Math.abs(distanceFromCenter) * 200;
    
    // Calculate rotation - items rotate more as they get further from center
    const rotateX = distanceFromCenter * 20;
    
    return { y, z, rotateX };
  };

  // Create transforms outside the render function for each project
  const projectTransforms = projects.map((_, index) => {
    const transformStyle = useTransform(
      scrollYProgress,
      [0, 1],
      [
        `translate(-50%, -50%) translateY(${positionItem(index, projects.length, 0).y}px) translateZ(${positionItem(index, projects.length, 0).z}px) rotateX(${positionItem(index, projects.length, 0).rotateX}deg)`,
        `translate(-50%, -50%) translateY(${positionItem(index, projects.length, 1).y}px) translateZ(${positionItem(index, projects.length, 1).z}px) rotateX(${positionItem(index, projects.length, 1).rotateX}deg)`
      ]
    );

    const opacity = useTransform(
      scrollYProgress,
      [0, 1],
      [index === 0 ? 1 : 0.3, index === projects.length - 1 ? 1 : 0.3]
    );

    return { transform: transformStyle, opacity };
  });

  return (
    <div className="carousel-container" ref={containerRef}>
      <motion.div 
        className="carousel" 
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        {projects.map((project, index) => {
          const { transform, opacity } = projectTransforms[index];
          
          return (
            <motion.div
              key={project.id}
              className="flap"
              style={{
                transform,
                opacity
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