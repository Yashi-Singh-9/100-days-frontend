// Select elements
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('header ul');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// NEW: error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

// Create message container
const successMessage = document.createElement('div');
successMessage.style.color = '#28a745';
successMessage.style.fontWeight = '600';
successMessage.style.marginBottom = '1rem';
form.insertBefore(successMessage, form.querySelector('button'));

// Toggle menu
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});

// Form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  successMessage.innerHTML = '';

  let isValid = true;

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  subjectError.textContent = '';
  messageError.textContent = '';

  // Name validation
  if (nameInput.value.trim().length < 3) {
    isValid = false;
    nameError.textContent = 'Name must be at least 3 characters';
    nameInput.style.borderColor = 'red';
  } else {
    nameInput.style.borderColor = '#F775C1';
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    isValid = false;
    emailError.textContent = 'Enter a valid email address';
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = '#F775C1';
  }

  // Subject validation
  if (subjectInput.value.trim().length < 3) {
    isValid = false;
    subjectError.textContent = 'Subject must be at least 3 characters';
    subjectInput.style.borderColor = 'red';
  } else {
    subjectInput.style.borderColor = '#F775C1';
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    isValid = false;
    messageError.textContent = 'Message must be at least 10 characters';
    messageInput.style.borderColor = 'red';
  } else {
    messageInput.style.borderColor = '#F775C1';
  }

  // Success
  if (isValid) {
    successMessage.innerHTML = '✅ Message sent successfully!';
    form.reset();

    nameInput.style.borderColor = '#EBEBF2';
    emailInput.style.borderColor = '#EBEBF2';
    subjectInput.style.borderColor = '#EBEBF2';
    messageInput.style.borderColor = '#EBEBF2';
  }
});
