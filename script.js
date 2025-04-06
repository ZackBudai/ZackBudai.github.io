document.addEventListener('DOMContentLoaded', () => {
    const panel = document.getElementById('rotating-panel');
    const panelContainer = document.querySelector('.panel-container');
    
    // Calculate the point where the rotation should start and end
    let startRotationPoint, endRotationPoint;
    
    function calculateRotationPoints() {
        const containerRect = panelContainer.getBoundingClientRect();
        startRotationPoint = containerRect.top + window.scrollY - window.innerHeight;
        endRotationPoint = containerRect.bottom + window.scrollY;
    }
    
    // Initial calculation
    calculateRotationPoints();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateRotationPoints);
    
    // Handle scroll event
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Calculate rotation progress (0 to 1)
        const progress = Math.max(0, Math.min(1, 
            (scrollPosition - startRotationPoint) / (endRotationPoint - startRotationPoint)
        ));
        
        // Calculate rotation angle (from 90 to -90 degrees for a clockwise rotation from edge)
        const rotation = 90 - (progress * 180);
        
        // Apply the rotation transform while keeping the left edge at center
        panel.style.transform = `translateX(0) rotateY(${rotation}deg)`;
    });
});