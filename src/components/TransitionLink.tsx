import { ReactNode, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Global event emitter for transitions
const transitionEvents = {
  listeners: new Set<() => void>(),
  
  // Method to trigger transition
  startTransition: () => {
    transitionEvents.listeners.forEach(listener => listener());
  },
  
  // Method to add listener
  onStartTransition: (callback: () => void) => {
    transitionEvents.listeners.add(callback);
    return () => {
      transitionEvents.listeners.delete(callback);
    };
  }
};

// Make transitionEvents available globally for direct access
export { transitionEvents };

type TransitionLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

// Custom link component that handles the transition sequence
export const TransitionLink = ({ to, children, className }: TransitionLinkProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Start fade out
    transitionEvents.startTransition();
    
    // Wait for fade out to complete before navigating
    setTimeout(() => {
      navigate(to);
    }, 300); // Shorter delay for smoother transition
  };
  
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};