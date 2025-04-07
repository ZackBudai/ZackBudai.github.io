document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.rotating-panel');
    const wrappers = document.querySelectorAll('.panel-wrapper');
    const panelContents = document.querySelectorAll('.panel-content');
    
    // Calculate rotation points for each panel
    function calculateRotationPoints(wrapper) {
        const rect = wrapper.getBoundingClientRect();
        return {
            start: rect.top + window.scrollY - window.innerHeight,
            end: rect.bottom + window.scrollY
        };
    }

    // Handle scroll event
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const screenCenter = scrollPosition + (windowHeight / 2);

        wrappers.forEach((wrapper, index) => {
            const panel = panels[index];
            const content = panelContents[index];
            const rotationPoints = calculateRotationPoints(wrapper);
            
            // Calculate progress for this panel (0 to 1)
            const progress = Math.max(0, Math.min(1, 
                (scrollPosition - rotationPoints.start) / (rotationPoints.end - rotationPoints.start)
            ));
            
            // Calculate rotation angle (from 90 to -90 degrees)
            const rotation = 90 - (progress * 180);
            
            // Apply the rotation transform
            panel.style.transform = `translateX(0) rotateY(${rotation}deg)`;

            // Handle content visibility
            const wrapperRect = wrapper.getBoundingClientRect();
            const wrapperCenter = wrapperRect.top + (wrapperRect.height / 2);
            const distanceFromCenter = Math.abs(wrapperCenter);
            
            if (distanceFromCenter < windowHeight * 0.3) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    });

    // Initial calculation
    window.dispatchEvent(new Event('scroll'));
});