const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('d-none');
  navLinks.classList.toggle('d-flex');
  navLinks.classList.toggle('flex-column');
  navLinks.classList.toggle('bg-dark');
  navLinks.classList.toggle('p-3');
  navLinks.classList.toggle('rounded');
  navLinks.classList.toggle('position-absolute');
  navLinks.style.right = '1rem';
  navLinks.style.top = '5.5rem';
});