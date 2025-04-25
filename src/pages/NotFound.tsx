import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page immediately
    navigate('/', { replace: true });
  }, [navigate]);

  // This won't be visible since we redirect immediately
  return null;
};

export default NotFound;
