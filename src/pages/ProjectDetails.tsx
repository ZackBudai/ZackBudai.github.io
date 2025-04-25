import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="project-details">
      <Navigation />
      <div className="project-content">
        <h1>{id}</h1>
        {/* Project specific content will be dynamically loaded based on the ID */}
      </div>
    </div>
  );
};