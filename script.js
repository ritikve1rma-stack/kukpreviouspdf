// Function to show/hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Upload form simulation
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('upload-status').textContent = 'Upload simulated! (In real app, send to server)';
});

// Contact form simulation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contact-status').textContent = 'Message sent! (In real app, send to server)';
});

// User form simulation
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('user-status').textContent = 'User registered/logged in! (In real app, handle auth)';
});