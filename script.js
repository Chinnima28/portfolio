document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
// Add this to your existing JavaScript file (scripts.js)

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function setActiveLinkAndSection() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        sections.forEach((section) => section.classList.remove('active'));

        navLinks[index].classList.add('active');
        sections[index].classList.add('active');
    }

    setActiveLinkAndSection(); // Set the active state on initial load

    window.addEventListener('scroll', setActiveLinkAndSection);
});
