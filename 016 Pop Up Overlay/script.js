// Select DOM elements
const closeButton = document.querySelector('.close i');
const deleteButton = document.querySelector('.btns button.bg-danger');
const cancelButton = document.querySelector('.btns .cancel');
const checkboxes = document.querySelectorAll('.box input[type="checkbox"]');

// Close the popup (simulate hiding the popup)
closeButton.addEventListener('click', () => {
  document.querySelector('main').style.display = 'none';
});

// Delete project button functionality
deleteButton.addEventListener('click', () => {
  // Collect checkbox states
  const states = Array.from(checkboxes).map((checkbox, index) => ({
    item: index + 1,
    checked: checkbox.checked
  }));

  // Optionally log or use these values
  console.log("Delete confirmed. Checkbox states:", states);

  // Here you might send data to a server or proceed with deletion
  alert('Project deleted successfully!');

  // Optionally hide popup after action
  document.querySelector('main').style.display = 'none';
});

// Cancel button functionality
cancelButton.addEventListener('click', () => {
  alert('Deletion cancelled. Project is safe!');
  document.querySelector('main').style.display = 'none';
});
