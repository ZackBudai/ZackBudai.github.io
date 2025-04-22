import React, { useEffect, useRef } from 'react';

const GlassEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !glassRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const glass = glassRef.current;
      if (!glass) return;

      const rect = glass.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const intensity = 1 - Math.min(distance / maxDistance, 1);
      
      // Apply glass effect
      glass.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255, 255, 255, ${0.05 + intensity * 0.05}) 0%,
          rgba(255, 255, 255, 0.02) 40%,
          rgba(255, 255, 255, 0.01) 100%
        )
      `;
      
      // Add subtle movement
      const moveX = (dx / rect.width) * 20;
      const moveY = (dy / rect.height) * 20;
      glass.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      const glass = glassRef.current;
      if (!glass) return;
      
      glass.style.background = 'rgba(255, 255, 255, 0.01)';
      glass.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="glass-container">
      <div ref={glassRef} className="glass-surface">
        <div className="glass-content">
          <h1>My Projects</h1>
          <p>Discover some of my recent work and personal projects</p>
        </div>
      </div>
    </div>
  );
};

export default GlassEffect;
