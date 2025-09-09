async function getJoke() {
    const jokeEl = document.getElementById('joke');
    jokeEl.textContent = 'Loading...';

    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      jokeEl.textContent = `${data.setup} 🤔\n\n${data.punchline} 😂`;
    } catch (error) {
      jokeEl.textContent = 'Oops! Failed to fetch a joke. Try again.';
      console.error('Error fetching joke:', error);
    }
  }