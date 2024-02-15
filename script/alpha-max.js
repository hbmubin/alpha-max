function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log(alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  addBackgroundColorById(alphabet);
}
function play() {
  hideElementById("home-screen");
  showElementById("playground-screen");
  continueGame();
}
