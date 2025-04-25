import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';
import { projects } from '../data/projectsData';

export const Projects = () => {
  return (
    <div className="projects">
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
    </div>
  );
};