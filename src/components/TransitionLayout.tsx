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

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
        setIsTransitioning(false);
        document.body.classList.remove('transitioning');
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [location, children, isTransitioning]);

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
    <main className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </main>
  );
};