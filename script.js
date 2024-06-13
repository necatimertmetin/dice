let dice2Visible = true;

function rollDice(id) {
  const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
  const diceElement1 = document.getElementById('dice1');
  const diceElement2 = document.getElementById('dice2');

  // Generate random dice images for both dice every 100 milliseconds for 1 second (10 iterations)
  let iterations = 10;
  let interval = setInterval(function() {
    if (iterations > 0) {
      const randomNumber1 = Math.floor(Math.random() * 6);
      const randomNumber2 = Math.floor(Math.random() * 6);
      diceElement1.setAttribute('src', diceImages[randomNumber1]);
      if (dice2Visible) {
        diceElement2.setAttribute('src', diceImages[randomNumber2]);
      }
      iterations--;
    } else {
      clearInterval(interval);
    }
  }, 100);

  // After 1 second, settle on the last shown dice images
  setTimeout(function() {
    clearInterval(interval); // Stop the interval if it's still running
    const finalDiceImage1 = diceElement1.getAttribute('src');
    const finalDiceImage2 = diceElement2.getAttribute('src');
    diceElement1.setAttribute('src', finalDiceImage1); // Ensure it stays on the last shown image
    if (dice2Visible) {
      diceElement2.setAttribute('src', finalDiceImage2); // Ensure it stays on the last shown image
    }
  }, 1000);
}

function toggleDice() {
  const diceElement2 = document.getElementById('dice2');
  dice2Visible = !dice2Visible; // Toggle the visibility flag

  if (dice2Visible) {
    diceElement2.style.display = 'block';
  } else {
    diceElement2.style.display = 'none';
  }
}
