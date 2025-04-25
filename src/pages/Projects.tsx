import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';
import Navigation from '../components/Navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

const projectsList: Project[] = [
  // Add your project data here
];

export const Projects = () => {
  return (
    <div className="projects">
      <Navigation />
      <div className="projects-header">
        <div className="header-content">
          <h1>My Projects</h1>
          <p>Discover some of my recent work and personal projects</p>
        </div>
      </div>
      <div className="panels-container">
        {projectsList.map(project => (
          <React.Fragment key={project.id}>
            <RotatingPanel project={project} />
            <div className="spacer" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};