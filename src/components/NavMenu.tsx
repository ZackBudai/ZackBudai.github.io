import { TransitionLink } from './TransitionLink';

const NavMenu = () => {
  return (
    <nav className="nav-links">
      <TransitionLink to="/" className="projects-link">Home</TransitionLink>
      <TransitionLink to="/about" className="projects-link">About</TransitionLink>
      <TransitionLink to="/projects" className="projects-link">Projects</TransitionLink>
      <TransitionLink to="/academics" className="projects-link">Academics</TransitionLink>
    </nav>
  );
};

export default NavMenu;
