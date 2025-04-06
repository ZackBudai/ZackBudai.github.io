document.addEventListener('DOMContentLoaded', () => {
    // Get all carousel panels
    const carousel = document.querySelector('.carousel');
    const panels = document.querySelectorAll('.panel');
    const panelCount = panels.length;
    
    // Set initial positions - panels arranged in a circle
    function initPanels() {
        panels.forEach((panel, index) => {
            // Calculate the angle for each panel around a circle (in radians)
            const angle = (index / panelCount) * Math.PI * 2;
            
            // Default panel styling
            panel.style.transform = `rotateY(${angle}rad) translateZ(50vh)`;
            panel.style.opacity = 0;
        });
        
        // Initialize first panel to be visible
        panels[0].style.opacity = 1;
    }
    
    // Update panel positions and visibility based on scroll position
    function updateCarousel() {
        // Get scroll progress within carousel container
        const carouselContainer = document.querySelector('.carousel-container');
        const scrollStart = carouselContainer.offsetTop;
        const scrollEnd = scrollStart + carouselContainer.offsetHeight;
        const scrollPosition = window.scrollY - scrollStart;
        const totalScrollDistance = scrollEnd - scrollStart;
        
        // Only update when scroll position is within the carousel container
        if (window.scrollY >= scrollStart && window.scrollY <= scrollEnd) {
            // Calculate progress (0 to 1) through the carousel section
            const progress = scrollPosition / totalScrollDistance;
            
            // Calculate the section of scroll dedicated to each panel
            const sectionSize = 1 / panelCount;
            
            // Calculate the full rotation angle based on scroll progress
            const rotationAngle = progress * Math.PI * 2;
            
            // Update each panel
            panels.forEach((panel, index) => {
                // Base angle for this panel
                const baseAngle = (index / panelCount) * Math.PI * 2;
                
                // Calculate actual rotation for this panel
                const currentAngle = baseAngle - rotationAngle;
                
                // Calculate if this panel is facing front (cos value near 1)
                const cosValue = Math.cos(currentAngle);
                
                // Set panel transform
                panel.style.transform = `rotateY(${currentAngle}rad) translateZ(50vh)`;
                
                // Set opacity based on facing position
                // Only make fully visible when very close to facing front
                if (cosValue > 0.85) {
                    // Main visible panel (facing front)
                    panel.style.opacity = 1;
                    panel.style.zIndex = 10;
                } else if (cosValue > 0) {
                    // Partially visible panels
                    panel.style.opacity = cosValue * 0.7;
                    panel.style.zIndex = 5;
                } else {
                    // Panels facing away (back side)
                    panel.style.opacity = 0;
                    panel.style.zIndex = 0;
                }
            });
        }
    }
    
    // Initialize panel positions
    initPanels();
    
    // Update carousel on scroll
    window.addEventListener('scroll', updateCarousel);
    
    // Initial update
    updateCarousel();
});