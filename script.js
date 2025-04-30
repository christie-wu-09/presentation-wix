 // Dynamic grid based on mouse position
 document.addEventListener('mousemove', (e) => {
    const grid = document.getElementById('dynamic-grid');
    const windowWidth = window.innerWidth;
    const position = e.clientX / windowWidth;
    
    // Scale grid size based on mouse position (smaller on right, larger on left)
    const gridSize = 50 + (position * 100);
    grid.style.backgroundSize = `${gridSize}px ${gridSize}px`;
    
    // Keep grid centered
    grid.style.backgroundPosition = 'center';
});

// Page navigation
function showPage(pageNum) {
    // Hide all pages
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
        document.querySelector(`.nav-btn:nth-child(${i})`).classList.remove('active');
    }
    
    // Show selected page
    document.getElementById(`page${pageNum}`).style.display = 'flex';
    document.querySelector(`.nav-btn:nth-child(${pageNum})`).classList.add('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showPage(1);
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('open');
    });
});

document.querySelectorAll('.nav-btn, .accordion-header').forEach(el => {
    el.addEventListener('click', () => {
      console.log('clicked:', el);
    });
  });