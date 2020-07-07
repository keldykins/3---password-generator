var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
// var passLength = 8-128;
// var passLowCase = .uselowercase
// var passUpCase = .useuppercase
// var passNum = numeric
// var specChar = special characters
// var selector = prompt
function makeid(length) {
    var result    = '';
    var characters     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
console.log(makeid(8-128));

var pLength = alert ("how many characters do you want your password to be?")

//Math.floor(Math.random() * 124) + 8;
//console.log(bar);
//generates a random number between 8 and 128

// // var prompt
// // var passCri = prompt("length 8-128, lc uc numeric, and/or spec char")
// input validated  least one char type
// all prompts are answered
// generate pw that matches selected criteria
// the pw displayed in alert or written to the page
//

var characterAmountNumber ="Number of Characters"
var number = min = 8, max = 128
var characterAmountRange ="Range of Characters"
var Range = min = 8, max = 128

//Math.floor(Math.random() * 124) + 8;

// Creates an array that lists out all of the options (Character length, special characters, numbers, uppercase).
var options = []

for (var i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = options[Math.floor(Math.random() * choices.length)];

// Collect the user's response and convert to lower case.
var userGuess = prompt("Enter r, p, or s to play!");

// Only generate password if user chooses at least one specification.
if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

    alert("The computer chose " + computerGuess);

    var num = Math.floor(Math.random() * 128) + 8;