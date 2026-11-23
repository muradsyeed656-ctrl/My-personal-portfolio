
// Welcome message in browser console
console.log("Welcome to Ayesha Murad's Portfolio!");

// Smooth navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigating to " + this.textContent);
    });
});

// Simple scroll reveal animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
