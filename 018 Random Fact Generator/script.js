// Event Listeners
document.getElementById('generate-btn').addEventListener('click', getRandomFact);
document.getElementById('thumbs-up-btn').addEventListener('click', rateFact);
document.getElementById('thumbs-down-btn').addEventListener('click', rateFact);
document.getElementById('submit-fact-btn').addEventListener('click', submitUserFact);

// Fetch random fact based on category
async function getRandomFact() {
    const category = document.getElementById('category-select').value; // Get selected category
    const url = `https://uselessfacts.jsph.pl/random.json?language=en&category=${category}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const fact = data.text;
        document.getElementById('fact').textContent = fact;
    } catch (error) {
        document.getElementById('fact').textContent = "Oops! Something went wrong. Please try again.";
    }
}

// Rate fact (thumbs up/down)
function rateFact(event) {
    const factText = document.getElementById('fact').textContent;
    const rating = event.target.id === 'thumbs-up-btn' ? 'liked' : 'disliked';
    
    // Save rating in local storage
    let ratedFacts = JSON.parse(localStorage.getItem('ratedFacts')) || [];
    ratedFacts.push({ fact: factText, rating: rating });
    localStorage.setItem('ratedFacts', JSON.stringify(ratedFacts));
    
    // Update liked facts display
    displayLikedFacts();
}

// Display most liked facts from local storage
function displayLikedFacts() {
    const ratedFacts = JSON.parse(localStorage.getItem('ratedFacts')) || [];
    const likedFacts = ratedFacts.filter(fact => fact.rating === 'liked');

    const likedFactsList = document.getElementById('liked-facts-list');
    likedFactsList.innerHTML = ''; // Clear the list first

    likedFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact.fact;
        likedFactsList.appendChild(li);
    });
}

// Call displayLikedFacts when the page loads
displayLikedFacts();

// Submit user fact and save to local storage
function submitUserFact() {
    const userFact = document.getElementById('user-fact').value;
    const messageContainer = document.getElementById('message-container');
    
    if (userFact) {
        // Append to local storage for custom facts
        let customFacts = JSON.parse(localStorage.getItem('customFacts')) || [];
        customFacts.push({ fact: userFact, rating: 'unrated' });
        localStorage.setItem('customFacts', JSON.stringify(customFacts));
        
        // Clear input field
        document.getElementById('user-fact').value = '';
        
        // Display success message
        messageContainer.style.color = 'green';
        messageContainer.innerHTML = "Your fact has been successfully submitted!";
    } else {
        // Display error message
        messageContainer.style.color = 'red';
        messageContainer.innerHTML = "Please enter a fact before submitting.";
    }
}
