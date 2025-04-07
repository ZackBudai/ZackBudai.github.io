import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-container">
      <motion.div 
        className="projects-link-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/projects" className="projects-link">
          Projects
        </Link>
      </motion.div>

      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>Zack Budai</h1>
        <p>Software Developer</p>
      </motion.div>
    </div>
  );
};