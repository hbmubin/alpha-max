function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
  const expectedAlphabet = currentAlphabet.toLowerCase();
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    continueGame();
    removeBackgroundColorById(expectedAlphabet);
  } else {
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    if (newLife <= 0) {
      console.log("Game Ovar");
      gameOver();
    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}
function play() {
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  hideElementById("home-screen");
  showElementById("playground-screen");
  hideElementById("gameOver-screen");
  continueGame();
}
function gameOver() {
  hideElementById("playground-screen");
  showElementById("gameOver-screen");
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("final-score", lastScore);
}
