// Select elements
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('header ul');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Create message container
const successMessage = document.createElement('div');
successMessage.style.color = '#28a745';
successMessage.style.fontWeight = '600';
successMessage.style.marginBottom = '1rem';
form.insertBefore(successMessage, form.querySelector('button'));

// Menu toggle
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
  
  // Clear previous message
  successMessage.innerHTML = '';

  let isValid = true;

  // Name validation
  if (nameInput.value.trim().length < 3) {
    isValid = false;
    nameInput.style.borderColor = 'red';
  } else {
    nameInput.style.borderColor = '#F775C1';
  }

  // Email validation (basic)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    isValid = false;
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = '#F775C1';
  }

  // Subject validation
  if (subjectInput.value.trim().length < 3) {
    isValid = false;
    subjectInput.style.borderColor = 'red';
  } else {
    subjectInput.style.borderColor = '#F775C1';
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    isValid = false;
    messageInput.style.borderColor = 'red';
  } else {
    messageInput.style.borderColor = '#F775C1';
  }

  // If all valid, show success message
  if (isValid) {
    successMessage.innerHTML = '✅ Message sent successfully!';
    form.reset();
    nameInput.style.borderColor = '#EBEBF2';
    emailInput.style.borderColor = '#EBEBF2';
    subjectInput.style.borderColor = '#EBEBF2';
    messageInput.style.borderColor = '#EBEBF2';
  }
});
