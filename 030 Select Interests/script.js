// Select all the interest items
const interestItems = document.querySelectorAll('.interests');

// Toggle selection on click
interestItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});

// Handle Skip button click
const skipButton = document.querySelector('.skip');
skipButton.addEventListener('click', () => {
  alert('You chose to skip selecting interests.');
  // window.location.href = 'homepage.html';
});

// Handle Save button click
const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', () => {
  const selectedInterests = Array.from(document.querySelectorAll('.interests.selected'))
    .map(item => item.textContent.trim());

  if (selectedInterests.length === 0) {
    alert('Please select at least one interest or click Skip.');
  } else {
    alert('Your selected interests: ' + selectedInterests.join(', '));
    // Send data or redirect here
  }
});

// Handle close button (the X icon) — without alert
const closeButton = document.querySelector('.close i');
closeButton.addEventListener('click', () => {
  // Option 1: Hide the main content
  document.querySelector('main').style.display = 'none';

  // Option 2: Redirect to homepage
  // window.location.href = 'homepage.html';
});
