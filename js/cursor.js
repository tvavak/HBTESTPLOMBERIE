document.addEventListener('DOMContentLoaded', () => {
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');
    let isStuck = false;
    let mouseX = 0;
    let mouseY = 0;
    let stuckX = 0;
    let stuckY = 0;

    const getMousePos = (e) => {
        return {
            x: e.clientX,
            y: e.clientY
        };
    };

    // Move cursor based on mouse movement
    document.addEventListener('mousemove', (e) => {
        const mousePos = getMousePos(e);
        mouseX = mousePos.x;
        mouseY = mousePos.y;

        if (!isStuck) {
            cursorInner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorOuter.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
    });

    // Add hover effect for clickable elements
    const handleMouseEnter = () => {
        document.body.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
        document.body.classList.remove('cursor-hover');
    };

    // Add hover effect to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"], .clickable');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add stuck effect when clicking
    document.addEventListener('mousedown', () => {
        cursorInner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.8)`;
        cursorOuter.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1.2)`;
    });

    document.addEventListener('mouseup', () => {
        cursorInner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorOuter.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget) {
            cursorInner.style.opacity = '0';
            cursorOuter.style.opacity = '0';
        }
    });

    document.addEventListener('mouseover', () => {
        cursorInner.style.opacity = '1';
        cursorOuter.style.opacity = '1';
    });
});
