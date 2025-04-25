import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-links">
      <Link to="/" className="projects-link">Home</Link>
      <Link to="/about" className="projects-link">About</Link>
      <Link to="/projects" className="projects-link">Projects</Link>
      <Link to="/academics" className="projects-link">Academics</Link>
    </nav>
  );
};

export default Navigation;
