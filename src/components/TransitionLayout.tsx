import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { transitionEvents } from './TransitionLink';

type TransitionLayoutProps = {
  children: ReactNode;
};

export const TransitionLayout = ({ children }: TransitionLayoutProps) => {
  const location = useLocation();
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [renderChildren, setRenderChildren] = useState(children);
  
  // Handle location changes (this happens after URL actually changes)
  useEffect(() => {
    // When the location changes, show the new children with a fade-in
    setRenderChildren(children);
    setTransitionStage('fadeIn');
    
    // Remove the transitioning class when fade-in starts
    setTimeout(() => {
      document.body.classList.remove('transitioning');
    }, 50);
  }, [location, children]);
  
  // Listen for transition start events from TransitionLink
  useEffect(() => {
    const handleTransitionStart = () => {
      // When a transition starts, fade out the current page
      setTransitionStage('fadeOut');
      // Add transitioning class to body to prevent scrolling
      document.body.classList.add('transitioning');
    };
    
    const cleanup = transitionEvents.onStartTransition(handleTransitionStart);
    
    return () => {
      cleanup();
      // Ensure transitioning class is removed when component unmounts
      document.body.classList.remove('transitioning');
    };
  }, []);
  
  return (
    <div className={`glass-transition ${transitionStage}`}>
      {renderChildren}
    </div>
  );
};
