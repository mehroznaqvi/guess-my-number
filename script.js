"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number! 🎁";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17;
console.log(document.querySelector(".guess").value);
console.log((document.querySelector(".guess").value = 23));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let yourScore = 20;
let highScore = "0";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //no number
  if (!guess) {
    displayMessage("❌No number");

    //player wins
  } else if (guess === secretNumber) {
    displayMessage("✅Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (yourScore > highScore) {
      highScore = yourScore;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //Guess is worng
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "⏫ Too high" : "⏬ Too low");
    yourScore--;
    document.querySelector(".score").textContent = yourScore;
  }
  //guess is too high
  // else if (guess > secretNumber) {
  //   if (yourScore > 0) {
  //     document.querySelector(".message").textContent = "⏫ Too high";
  //     yourScore = yourScore - 1;
  //     document.querySelector(".score").textContent = yourScore;
  //   } else {
  //     document.querySelector(".message").textContent = "💥You lost the game";
  //   }
  // }
  // //guess is too low
  // else if (guess < secretNumber) {
  //   if (yourScore > 0) {
  //     document.querySelector(".message").textContent = "⏬ Too low";
  //     yourScore = yourScore - 1;
  //     document.querySelector(".score").textContent = yourScore;
  //   } else {
  //     document.querySelector(".message").textContent = "💥You lost the game";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  yourScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = yourScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
