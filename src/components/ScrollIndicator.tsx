import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator as soon as scrolling starts
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    // Check if page is scrollable
    const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
    setIsVisible(isScrollable);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${isVisible ? 'visible' : ''}`}>
      <div className="scroll-chevron"></div>
      <div className="ember"></div>
      <div className="ember"></div>
      <div className="ember"></div>
      <div className="ember"></div>
      <div className="ember"></div>
      <div className="ember"></div>
    </div>
  );
};

export default ScrollIndicator;
