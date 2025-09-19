let word = '';
let displayedWord = [];
let wrongGuesses = [];
let hintUsed = false;

async function fetchWord() {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await response.json();
    word = data[0].toLowerCase();
    displayedWord = Array(word.length).fill('_');
    document.getElementById('word').textContent = displayedWord.join(' ');
    document.getElementById('guesses').style.display = 'none';
    document.getElementById('guesses').textContent = 'Wrong guesses: ';
    document.getElementById('message').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('hint').textContent = '';
    document.getElementById('hintButton').style.display = 'inline-block';
    wrongGuesses = [];
    hintUsed = false;
  } catch (error) {
    document.getElementById('message').textContent = 'Error fetching word!';
    document.getElementById('message').className = 'failure';
  }
}

fetchWord();

function guessLetter() {
  const input = document.getElementById('letterInput');
  const guess = input.value.toLowerCase();
  input.value = '';

  if (!guess.match(/[a-z]/i)) {
    alert('Please enter a valid letter!');
    return;
  }

  if (word.includes(guess)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        displayedWord[i] = guess;
      }
    }
    document.getElementById('word').textContent = displayedWord.join(' ');
    checkWin();
  } else {
    if (!wrongGuesses.includes(guess)) {
      wrongGuesses.push(guess);
      document.getElementById('guesses').style.display = 'block';
      document.getElementById('guesses').textContent = 'Wrong guesses: ' + wrongGuesses.join(', ');
    }
    checkLose();
  }
}

function checkWin() {
  if (displayedWord.join('') === word) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = '🎉 You guessed it!';
    messageEl.className = 'success';
    document.getElementById('resetButton').style.display = 'inline-block';
    document.getElementById('hintButton').style.display = 'none';
  }
}

function checkLose() {
  if (wrongGuesses.length >= 6) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = '💀 Game Over! The word was: ' + word;
    messageEl.className = 'failure';
    document.getElementById('resetButton').style.display = 'inline-block';
    document.getElementById('hintButton').style.display = 'none';
  }
}

function giveHint() {
  if (hintUsed) {
    alert('You have already used your hint!');
    return;
  }

  hintUsed = true;
  const hintLetters = [];
  const hintLength = 2;  // Show 2 letters as a hint

  // Pick 2 random indices in the word to reveal
  let indices = [];
  while (indices.length < hintLength) {
    const index = Math.floor(Math.random() * word.length);
    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  // Fill in the hint with those letters
  indices.forEach(index => {
    hintLetters.push(word[index]);
  });

  // Display hint as part of the word
  for (let i = 0; i < word.length; i++) {
    if (hintLetters.includes(word[i])) {
      displayedWord[i] = word[i];
    }
  }
  document.getElementById('word').textContent = displayedWord.join(' ');
  document.getElementById('hint').textContent = 'Hint: ' + hintLetters.join(', ');

  // Disable the hint button after use
  document.getElementById('hintButton').style.display = 'none';
}

function resetGame() {
  fetchWord();
}