let secretLetter = '';
let attempts = 0;
const vowels = ['A', 'E', 'I', 'O', 'U'];
const ranges = [
  ['A', 'G'],
  ['H', 'N'],
  ['O', 'T'],
  ['U', 'Z']
];

// Generate random letter from A-Z
function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}

function resetGame() {
  secretLetter = getRandomLetter();
  attempts = 0;
  document.getElementById('message').textContent = 'Press a key (A-Z) to guess!';
  document.getElementById('attempts').textContent = 'Attempts: 0';
  document.getElementById('letterBox').textContent = '?';
  document.getElementById('hint').textContent = "Hint: It's a letter between 'A' and 'Z'.";
}

// Initial game setup
resetGame();

document.addEventListener('keydown', function(event) {
  const guess = event.key.toUpperCase();
  const isValidLetter = /^[A-Z]$/.test(guess);
  if (!isValidLetter) {
    document.getElementById('message').textContent = 'Please press a letter key (A-Z).';
    return;
  }

  if (attempts >= 10) return; // prevent playing after reveal

  attempts++;
  document.getElementById('attempts').textContent = 'Attempts: ' + attempts;
  document.getElementById('letterBox').textContent = guess;

  if (guess === secretLetter) {
    document.getElementById('message').textContent = `🎉 Correct! It was "${secretLetter}"!`;
    document.getElementById('hint').textContent = '';
  } else {
    // Provide vowel/consonant hint
    let typeHint = vowels.includes(secretLetter) ? "vowel" : "consonant";

    // Provide alphabet position hint
    let positionHint = '';
    if (guess < secretLetter) {
      positionHint = "Try a letter later in the alphabet.";
    } else {
      positionHint = "Try a letter earlier in the alphabet.";
    }

    // Update message and hint text
    document.getElementById('message').textContent = `❌ Nope, try again!`;
    let finalHint = `Hint: It's a ${typeHint}. ${positionHint}`;

    // After 5 attempts: narrow down the range
    if (attempts >= 5 && attempts < 10) {
      let rangeHint = getRangeHint(secretLetter);
      finalHint += ` It's between '${rangeHint[0]}' and '${rangeHint[1]}'.`;
    }

    document.getElementById('hint').textContent = finalHint;

    // Reveal answer after 10 attempts
    if (attempts >= 10) {
      document.getElementById('message').textContent = `😵 Too many attempts! The correct letter was "${secretLetter}".`;
      document.getElementById('hint').textContent = '';
    }
  }
});

// Function to get the narrowed down range based on secretLetter
function getRangeHint(letter) {
  for (let range of ranges) {
    if (letter >= range[0] && letter <= range[1]) {
      return range;
    }
  }
  // default fallback
  return ['A', 'Z'];
}