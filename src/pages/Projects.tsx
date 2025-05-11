import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';
import NavMenu from '../components/NavMenu';
import ScrollIndicator from '../components/ScrollIndicator';

const projects = [
  {
    id: 'graph-markdown-jupyter',
    title: 'Graph-Based Markdown and Jupyter Workspace',
    description: 'A workspace integrating graph-based navigation with Markdown and Jupyter notebooks',
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
      <NavMenu />
      <div className="projects-header">
        <div className="header-content">
          <h1>My Projects</h1>
          <p>Discover some of my recent work and personal projects</p>
        </div>
      </div>
      <div className="panels-container">
        {projects.map(project => (
          <React.Fragment key={project.id}>
            <RotatingPanel project={project} />
            <div className="spacer" />
          </React.Fragment>
        ))}
      </div>
      <ScrollIndicator />
    </div>
  );
};