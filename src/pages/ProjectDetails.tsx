import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="project-details"
    >
      <NavMenu />
      <div className="project-content">
        <h1>{id}</h1>
        {/* Project specific content will be dynamically loaded based on the ID */}
      </div>
    </motion.div>
  );
};