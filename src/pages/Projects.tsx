import React from 'react';
import { RotatingPanel } from '../components/RotatingPanel';
import NavMenu from '../components/NavMenu';
import ScrollIndicator from '../components/ScrollIndicator';

const projects = [
	{
		id: 'graph-markdown-jupyter',
		title: 'Graph-Based Markdown and Jupyter Workspace',
		description:
			'An innovative workspace environment that combines graph-based navigation with rich documentation and interactive code execution capabilities.',
		image: '/images/graph-project.png',
	},
	{
		id: 'portfolio-website',
		title: 'Portfolio Website',
		description:
			'A modern portfolio featuring 3D rotating panels, smooth transitions, and a beautiful glassmorphic UI design that creates an engaging and interactive experience.',
		image: '/images/portfolio.png',
	},
	{
		id: 'particle-universe',
		title: '3D Particle Universe',
		description:
			'A multiplayer space combat game with a unique dual-interface system, allowing players to engage in combat or spectate through cinematic camera views.',
		image: '/images/particle-universe.png',
	},
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