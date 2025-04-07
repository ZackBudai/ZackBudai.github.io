import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';

const projects = [
  {
    id: 'interactive-web-app',
    title: 'Interactive Web App',
    description: 'A modern web application built with React and Node.js',
    image: '/project1.jpg'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern technologies',
    image: '/project2.jpg'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'Cross-platform mobile application built with React Native',
    image: '/project3.jpg'
  }
];

export const Projects = () => {
  return (
    <div className="projects">
      <header className="projects-header">
        <div className="header-content">
          <h1>My Projects</h1>
          <p>Discover some of my recent work and personal projects</p>
        </div>
      </header>

      <div className="panels-container">
        {projects.map(project => (
          <React.Fragment key={project.id}>
            <RotatingPanel project={project} />
            <div className="spacer" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};