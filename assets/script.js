
var useUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useLower = [ "a", "b", "c", "d" , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var useSymbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@"];
var userMinChar = 8;
var userMaxChar = 128;


function passChar() {
  var  userNumber = prompt("How many characters is your password?");
    if (userNumber >= userMinChar && userNumber <= userMaxChar) {
      var wantCaps = confirm("Would you like to use Capitol Letters?"); {
        if (wantCaps == true);
        function randomUpper() {
          return useUpper[Math.floor(Math.random()*useUpper.length)];
      }
      
      
      var wantLower = confirm("Would you like to use Lower Case Letters?");
        if (wantLower == true);
        function randomLower() {
          return useLower[Math.floor(Math.random()*useLower.length)];
        }
      
      
        var wantSymbols = confirm("Would you like to use Symbols?")
    } else {
      alert("Your password needs to be between 8-128 characters.")
      passChar();
  }
}

passChar();


// function generatePassword {
//   var wantNumber = prompt("How many characters is your password?");
//     if (userNumber >= userMinChar && userNumber <= userMaxChar) {
//       var wantCaps = confirm("Would you like to use Capitol Letters?");
//       var wantLower = confirm("Would you like to use Lower Case Letters?");
//       var wantSymbols = confirm("Would you like to use Symbols?")
//     } else {
//       alert("Your password needs to be between 8-128 characters.")
//   }
// }


// function randomLower() {

//   return passLower[Math.floor(Math.random()*passLower.length)];

// }

// function randomSymbol() {

//   return passSymbol[Math.floor(Math.random()*passSymbol.length)];

// }

function randomUpper() {

  return passUpper[Math.floor(Math.random()*passUpper.length)];

// }

function randomNumber() {

  return passNumber[Math.floor(Math.random()*passNumber.length)];

}

console.log(randomSymbol());





// // // Assignment Code
// var generateBtn = document.querySelector("#generate");












// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// passwordText.value = password;

// // }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
