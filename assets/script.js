// // // Assignment Code
var generateBtn = document.querySelector("#generate");

var useUpperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useLowerCase = [ "a", "b", "c", "d" , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var useSymbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@"];
var userMinChar = 8;
var userMaxChar = 128;



function userPreference() {
  var  userNumber = prompt("How many characters is your password?");
    if (userNumber >= userMinChar && userNumber <= userMaxChar) {
      var wantUpper = confirm("Would you like to use Capitol Letters?");
      var wantLower = confirm("Would you like to use Lower Case Letters?");
      var wantSymbols = confirm("Would you like to use Symbols?");
    } else {
      alert("Your password needs to be between 8-128 characters.")
      userPreference();
    }
  }
userPreference();

// // Write password to the #password input

var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var randomGenerator = {
  lower: randomLower,
  upper: randomUpper,
  symbol: randomSymbol,
  number: randomNumber
};


function randomLower() {
  return useLowerCase[Math.floor(Math.random()*useLowerCase.length)];
}

function randomUpper() {
  return useUpperCase[Math.floor(Math.random()*useUpperCase.length)];
}
function randomSymbol() {
  return useSymbol[Math.floor(Math.random()*useSymbol.length)];
}

function randomNumber() {
  return useNumber[Math.floor(Math.random()*useNumber.length)]
}
