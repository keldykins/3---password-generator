// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);
}

function generatePassword() {
  var userSelect = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specChar = "!@#$%^&*()";
  var numbers = "1234567890";
  var password = "";

  var criLength = prompt(
    "how many characters? (between 8-128 characters in length)"
  );
  var criUpper = confirm("upper case characters included?");
  var criSpec = confirm("special characters included?");
  var criNum = confirm("numbers included?");

  if (criUpper) {
    userSelect = userSelect.concat(upperCase);
  }
  if (criSpec) {
    userSelect = userSelect.concat(specChar);
  }
  if (criNum) {
    userSelect = userSelect.concat(numbers);
  }

  for (let i = 0; i < parseInt(criLength); i++) {
    // math.Random to generate random value from userSelect var
    let randomCharacter =
      userSelect[Math.floor(Math.random() * userSelect.length)];
    password = password.concat(randomCharacter);
    // shortcuts for line 42 below:
    // password = password + randomCharacter;
    // password += randomCharacter;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
