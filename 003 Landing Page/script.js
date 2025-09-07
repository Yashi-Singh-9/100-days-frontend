const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('active');

    if (isOpen) {
        mobileNav.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        mobileNav.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
});
