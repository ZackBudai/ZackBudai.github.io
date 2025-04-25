import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-container">
      <nav className="nav-links">
        <Link to="/about" className="projects-link">About</Link>
        <Link to="/projects" className="projects-link">Projects</Link>
        <Link to="/academics" className="projects-link">Academics</Link>
      </nav>
      <div className="home-content">
        <h1>Zack Budai</h1>
        <p>Software Developer</p>
      </div>
    </div>
  );
};