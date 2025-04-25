import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to home page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // 3 second delay before redirect
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p>Redirecting you to the home page in 3 seconds...</p>
      <button onClick={() => navigate('/')}>
        Go Home Now
      </button>
    </div>
  );
};

export default NotFound;
