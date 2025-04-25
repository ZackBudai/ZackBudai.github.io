import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { transitionEvents } from './TransitionLink';

type TransitionLayoutProps = {
  children: ReactNode;
};

export const TransitionLayout = ({ children }: TransitionLayoutProps) => {
  const location = useLocation();
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle location changes
  useEffect(() => {
    if (isTransitioning) {
      // We're in the middle of a fade out, wait for it to complete
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
        setIsTransitioning(false);
        document.body.classList.remove('transitioning');
      }, 500); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [location, children, isTransitioning]);

  // Listen for transition start events from TransitionLink
  useEffect(() => {
    const handleTransitionStart = () => {
      setTransitionStage('fadeOut');
      setIsTransitioning(true);
      document.body.classList.add('transitioning');
    };

    const cleanup = transitionEvents.onStartTransition(handleTransitionStart);
    return () => {
      cleanup();
      document.body.classList.remove('transitioning');
    };
  }, []);

  return (
    <div className={`glass-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  );
};