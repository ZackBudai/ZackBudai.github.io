import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

// Sample project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A full-stack web application with real-time features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Mobile app design with advanced UI animations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    technologies: ["React Native", "TypeScript", "Firebase"],
    demoUrl: "https://example.com/demo2",
    codeUrl: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "E-commerce platform with payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    demoUrl: "https://example.com/demo3",
    codeUrl: "https://github.com/yourusername/project3"
  },
  {
    id: 4,
    title: "Project Four",
    description: "AI-powered data analysis tool for business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Python", "TensorFlow", "Flask", "D3.js"],
    demoUrl: "https://example.com/demo4",
    codeUrl: "https://github.com/yourusername/project4"
  },
  {
    id: 5,
    title: "Project Five",
    description: "Blockchain application for secure transactions.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    demoUrl: "https://example.com/demo5",
    codeUrl: "https://github.com/yourusername/project5"
  },
  {
    id: 6,
    title: "Project Six",
    description: "AR/VR experience for educational purposes.",
    image: "https://images.unsplash.com/photo-1626379953819-b5df4312dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Unity", "C#", "ARKit", "VR"],
    demoUrl: "https://example.com/demo6",
    codeUrl: "https://github.com/yourusername/project6"
  }
];

const ProjectsData: React.FC = () => {
  return null; // This component just exports data
};

export default ProjectsData;