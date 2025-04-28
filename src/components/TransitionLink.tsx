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
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

// Custom link component that handles the transition sequence
export const TransitionLink = ({ to, children, className, onClick }: TransitionLinkProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call the custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }
    
    // If clicking current page link, just scroll to top
    if (window.location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Otherwise perform transition
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