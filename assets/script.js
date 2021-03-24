var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var passLower = "abcdefghijklmnopqrstuvwxyz";

var passNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var passChar = "!#$%&'()*+,-./:;<=>?@[\}^_`{|}~";



function randomLower() {

  return passLower[Math.floor(Math.random()*passLower.length)];

}


function randomNumber() {
  
  return passNumber[Math.floor(Math.random()*passNumber.length)];

}

console.log(randomNumber());





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
