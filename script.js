// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    this.textContent = isLightMode ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Scroll Animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// System Status Indicator
const statusDot = document.querySelector('.status-dot');
const statusText = document.querySelector('.status-text');

// Simulate system status (change to false to simulate downtime)
const systemOperational = true;

if (systemOperational) {
    statusDot.style.backgroundColor = '#00ff00';
    statusDot.style.boxShadow = '0 0 10px #00ff00';
    statusText.textContent = 'System Operational';
} else {
    statusDot.style.backgroundColor = '#ff0000';
    statusDot.style.boxShadow = '0 0 10px #ff0000';
    statusText.textContent = 'System Down';
}