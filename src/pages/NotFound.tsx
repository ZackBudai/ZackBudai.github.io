import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to home page immediately
  useEffect(() => {
    // Redirect immediately to home page
    navigate('/');
  }, [navigate]);
  
  // This content will briefly flash before redirect
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default NotFound;
