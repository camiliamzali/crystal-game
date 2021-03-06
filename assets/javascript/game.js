$(document).ready(function () {
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var crystalValues = [];
  // Generate random target number for user to aim for with a range between 50 - 100

  function targetNumber(min, max) {
    return Math.floor(Math.random() * (120 - 19 + 1) + 19);
  }


  // Generate random number to assign to crystals with a range between 1 - 10

  for (var i = 1; i <= 12; i++) {
    crystalValues.push(i);
  }

  var crystals = document.getElementsByClassName("crystal");
  var totalCrystals = crystals.length;

  function resetCrystals() {
    for (var i = 0; i < totalCrystals; i++) {
      var randomNum = Math.floor(Math.random() * 12) + 1;
      crystals[i].dataset.crystalvalue = randomNum;
      // console.log(`Crystal ${i} is ${randomNum}`);
    }
  }


  function newGame() {
    $("#match").text(targetNumber());
    $("#score").text("0");
    counter = 0;
    resetCrystals();
  }

  $(".crystal").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    var targetNumber = $("#match").text();
    counter += crystalValue;
    $("#score").text(counter);

    if (counter == targetNumber) {
      alert("You won!");
      wins++
      $("#wins").text(wins);
      newGame();
    } else if (counter > targetNumber) {
      alert("You lose!");
      losses++
      $("#losses").text(losses);
      newGame();
    }
  });
  newGame();
});