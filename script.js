// Creates an array that lists out all of the options (Character length, special characters, numbers, uppercase).
var options = []

for (var i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = options[Math.floor(Math.random() * choices.length)];

// Collect the user's response and convert to lower case.
var userGuess = prompt("Enter r, p, or s to play!");
