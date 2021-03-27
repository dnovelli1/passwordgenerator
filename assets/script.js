// Assignment Code
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useNumbers = "0123456789";
var useSymbols = "!#$%&(,)*+-./:<=>?@";
var userMinChar = 8;
var userMaxChar = 128;

// Storage for the user's wants.
var wantUpper;
var wantLower;
var wantSymbols;
var wantNumbers;
var userNumber;
var allUserWants;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    // This will prompt the user to enter the number of characters they want with restrictions
    userNumber = prompt("How many characters is your password?");
    var userWants = "";
    var allUserWants = "";
    // If the number the user chose is less than 8 or greater than 128, the alert will pop up leading them back to the beginning
    if (userNumber >= userMinChar && userNumber <= userMaxChar) {
      wantUpper = confirm("Would you like to use Capitol Letters?");
      wantLower = confirm("Would you like to use Lower Case Letters?");
      wantSymbols = confirm("Would you like to use Symbols?");
      wantNumbers = confirm("Would you like to use Numbers?");
    } else if (userNumber == null){
    } else {
        alert("Your password must contain at least 8 characters and no more than 128 characters!");
        generatePassword();
    };
    // Start sequence of possible outcomes from the user by concatinating into allUserWants.
    if (wantUpper === true) {
      allUserWants = allUserWants.concat(useUpperCase);
    }
    if (wantLower === true) {
      allUserWants = allUserWants.concat(useLowerCase);
    }
    if (wantSymbols === true) {
      allUserWants = allUserWants.concat(useSymbols);
    }
    if (wantNumbers === true) {
      allUserWants = allUserWants.concat(useNumbers);
    }
    // Randomized generator for allUserWants
    for (var i = 0; i < userNumber; i++) {
      userWants += allUserWants[Math.floor(Math.random()*allUserWants.length)];
    } 
    return userWants;
};