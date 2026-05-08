document.addEventListener('DOMContentLoaded', () => {
    console.log('Student Dashboard Loaded');
    
    // Add micro-interactions if needed
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                item.style.transform = 'translateX(4px)';
            }
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});
