// Define the Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  longDescription?: string;
  technologies?: string[];
  externalLink?: string;
}

// Export the projects data
export const projects: Project[] = [
  {
    id: 'markdown-jupyter-graph',
    title: 'Web-based Markdown and Jupyter Document Graph',
    description: 'A visualization tool that creates interactive knowledge graphs from markdown and Jupyter notebooks',
    image: '/project1.jpg',
    longDescription: 'This project is a web-based visualization tool that analyzes markdown and Jupyter notebook documents to create interactive knowledge graphs. It helps users understand relationships between concepts and navigate through complex documentation more effectively.',
    technologies: ['JavaScript', 'D3.js', 'Python', 'Jupyter'],
    externalLink: 'https://hashedcookies.com/graph/'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern technologies',
    image: '/project2.jpg',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies, featuring product management, shopping cart functionality, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    externalLink: ''
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'Cross-platform mobile application built with React Native',
    image: '/project3.jpg',
    longDescription: 'A cross-platform mobile application that provides users with an intuitive interface for accessing content and services on the go. Available for both iOS and Android platforms.',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    externalLink: ''
  }
];
