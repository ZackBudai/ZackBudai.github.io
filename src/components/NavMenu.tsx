import { TransitionLink } from './TransitionLink';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {
  const location = useLocation();

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-links">
      <TransitionLink to="/" className="projects-link" onClick={(e) => handleNavClick('/', e)}>
        Home
      </TransitionLink>
      <TransitionLink to="/about" className="projects-link" onClick={(e) => handleNavClick('/about', e)}>
        About
      </TransitionLink>
      <TransitionLink to="/projects" className="projects-link" onClick={(e) => handleNavClick('/projects', e)}>
        Projects
      </TransitionLink>
      <TransitionLink to="/academics" className="projects-link" onClick={(e) => handleNavClick('/academics', e)}>
        Academics
      </TransitionLink>
    </nav>
  );
};

export default NavMenu;
