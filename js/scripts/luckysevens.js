// Lucky Sevens

var initialBet = 0;
var amountWon = 0;
var maxRolls = 0;
var maxHeldRolls = 0;
var rolls = 0;
var betsArray = [];
var maxValue = 0;
var currentValue = initialBet;

function play() {
    document.getElementById("results").style.removeProperty( 'display' );
    document.getElementById("resultsHeader").style.removeProperty( 'display' );
    initialBet = document.getElementById("initialBet").value;
    var bet = initialBet;
    betsArray = [];

    while (bet > 0) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
	   console.log("First Dice Roll: " + dice1);
    var dice2 = Math.floor(Math.random() * 6) + 1;
	   console.log("Second Dice Roll: " + dice2);
    var diceRoll = dice1 + dice2;
     console.log("Total Dice Roll: " + diceRoll);
     rolls++;
    if(diceRoll != 7) {
            bet--;
        }
    else {
            bet += 4;
        }
        betsArray.push(bet);
	       console.log(betsArray);
         console.log(bet);
         currentValue=bet;
    if(maxValue < currentValue) {
           maxValue = currentValue;
           maxHeldRolls = betsArray.length;
         }
    }
maxRolls = betsArray.length;
displayResults();
}


// Dice Roll Function
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// DOM elements for HTML
function displayResults() {
   document.getElementById("results").style.display = "inline";
  // document.getElementById("playButton").innerHTML = "Play Again";
   document.getElementById("resultsBet").innerHTML = "$" + initialBet +".00";
   document.getElementById("resultsMaxRolls").innerHTML = maxRolls;
   document.getElementById("resultsMaxValue").innerHTML = "$" +     maxValue + ".00";
   document.getElementById("resultsHeldRolls").innerHTML = maxHeldRolls;
   };


function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["placeBet"].elements.length;
        loopCounter++) {
        if (document.forms["placeBet"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["placeBet"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function resetForm() {
    clearErrors();
    document.forms["placeBet"]["initialBet"].value = "";
    //document.forms["placeBet"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["placeBet"]["num1"].focus();
}
