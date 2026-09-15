const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a, .btn')) return;
        card.classList.toggle('flipped');
    });
});
