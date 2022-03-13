var player1 = prompt("First player name:");
while (player1 === null) {
  prompt("First player name:");
}
var player2 = prompt("Second player name:");
while (player2 === null) {
  prompt("Second player name:");
}
document.querySelector(".player1").textContent = player1;
document.querySelector(".player2").textContent = player2;
document.querySelector(".play").onclick = function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1);
  console.log(randomNumber2);
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").textContent = player1 + " Won";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").textContent = player2 + " Won";
  } else {
    document.querySelector(".winner").textContent = "Draw Try again.....";
  }
};
