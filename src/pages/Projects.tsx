import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';
import NavMenu from '../components/NavMenu';
import ScrollIndicator from '../components/ScrollIndicator';

const projects = [
  {
    id: 'graph-markdown-jupyter',
    title: 'Graph-Based Markdown and Jupyter Workspace',
    description: 'A workspace integrating graph-based navigation with Markdown and Jupyter notebooks',
    image: '/images/graph-project.png'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern React portfolio with interactive 3D elements and smooth transitions',
    image: '/images/portfolio-website.png'
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