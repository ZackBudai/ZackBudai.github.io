document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.rotating-panel');
    const panelContainers = document.querySelectorAll('.panel-container');
    
    // Calculate rotation points for each panel
    function calculateRotationPoints(container) {
        const containerRect = container.getBoundingClientRect();
        return {
            start: containerRect.top + window.scrollY - window.innerHeight,
            end: containerRect.bottom + window.scrollY
        };
    }
    
    // Handle scroll event
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        panels.forEach((panel, index) => {
            const container = panelContainers[index];
            const points = calculateRotationPoints(container);
            
            // Calculate rotation progress (0 to 1)
            const progress = Math.max(0, Math.min(1, 
                (scrollPosition - points.start) / (points.end - points.start)
            ));
            
            // Calculate rotation angle (from 90 to -90 degrees for a clockwise rotation from edge)
            const rotation = 90 - (progress * 180);
            
            // Apply the rotation transform
            panel.style.transform = `translateX(0) rotateY(${rotation}deg)`;
        });
    });
});