import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="project-details"
    >
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="back-button">← Back to Projects</Link>
        </div>
      </nav>
      
      <div className="project-content">
        <h1>{id}</h1>
        {/* Project specific content will be dynamically loaded based on the ID */}
      </div>
    </motion.div>
  );
};