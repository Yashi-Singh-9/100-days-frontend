const categorySelect = document.getElementById('categorySelect');
const generateBtn = document.getElementById('generateBtn');
const emojiDisplay = document.getElementById('emojiDisplay');

// Fetch categories and populate the dropdown
fetch('https://api.emojisworld.fr/v1/categories')
  .then(response => response.json())
  .then(data => {
    categorySelect.innerHTML = '';
    data.results.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error fetching categories:', error);
    categorySelect.innerHTML = '<option value="">Error loading categories</option>';
  });

// Fetch a random emoji from the selected category
generateBtn.addEventListener('click', () => {
  const selectedCategoryId = categorySelect.value;
  if (!selectedCategoryId) {
    alert('Please select a category.');
    return;
  }

  fetch(`https://api.emojisworld.fr/v1/random?categories=${selectedCategoryId}&limit=1`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        emojiDisplay.textContent = data.results[0].emoji;
      } else {
        emojiDisplay.textContent = '❓';
      }
    })
    .catch(error => {
      console.error('Error fetching emoji:', error);
      emojiDisplay.textContent = '⚠️';
    });
});
