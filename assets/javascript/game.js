var randomResult = 0;
var losses = 0;
var wins = 0;
var counter = 0;
var numberOptions = [];
var imageCrystal = 0;
var crystalValue = 0;

function reset() {
    console.log("reset function called")
    numberOptions = [];
    counter = 0;
    imageCrystal = 0;
    crystalValue = 0;
    $("totalScore").html(counter);

    randomResult = Math.floor(Math.random() * 101) + 19;
    $("#randResult").html('Random Result: ' + randomResult)

    for (var i = 0; i < 4; i++) {
        var number = Math.floor(Math.random() * 11) + 1;
        numberOptions.push(number);
    }

    for (var i = 0; i < 4; i++) {
        imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);

    }

    gameLogic();
    console.log("moving to game logic function")
}

reset();
gameLogic();

function gameLogic() {
$("#totalScore").html(counter);

$(".crystal-image").on("click", function () {

    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#totalScore").html(counter);

    if (counter === randomResult) {
        wins++;
        $("#lastGameResult").html("You Won!");
        $("#wins").html(wins);
        $("#crystals").empty();
        console.log("if statement pre reset")
        reset();
    }

    else if (counter > randomResult) {
        losses++;
        $("#lastGameResult").html("You lost!");
        $("#losses").html(losses);
        $("#crystals").empty();
        console.log("else if statement pre reset")
        reset();
    }

});

}
/*
PseudoCode
=====================================
A game with 4 crystal images and a random target number (19 - 120)
Each crystal is assigned a random value between 1-12
User clicks images to add that crystals value to a counter
If counter === random target number user wins
    +1 to wins
    reset game by picking a new random result and new random values for each crystal image
Else if counter > random target number user losses
    +1 to losses
    reset game by picking a new random result and new random values for each crystal image
Else 
    Break and user keeps guessing

*/