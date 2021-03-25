// // // Assignment Code
var useUpperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useLowerCase = [ "a", "b", "c", "d" , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var useSymbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@"];
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
      // If the number the user chose is less than 8 or greater than 128, the alert will pop up leading them back to the beginning
    if (userNumber < userMinChar || userNumber > userMaxChar) {
      alert("Your password must contain at least 8 characters and no more than 128 characters!");
      generatePassword();
    } else {
      wantUpper = confirm("Would you like to use Capitol Letters?");
      wantLower = confirm("Would you like to use Lower Case Letters?");
      wantSymbols = confirm("Would you like to use Symbols?");
      wantNumbers = confirm("Would you like to use Numbers?");
    };
    // Start sequence of possible outcomes from the user by concatinating into allUserWants
    if (wantUpper && wantLower && wantSymbols && wantNumbers) {
      allUserWants = useUpperCase.concat(useLowerCase, useSymbols, useNumbers);
    }
    else if (wantUpper && wantLower && wantSymbols) {
      allUserWants = useUpperCase.concat(useLowerCase, useSymbols);
    }
    else if (wantUpper && wantNumbers && wantSymbols) {
      allUserWants = useUpperCase.concat(useNumbers, useSymbols);
    }
    else if (wantLower && wantNumbers && wantSymbols) {
      allUserWants = useLowerCase.concat(use)
    }
    else if (wantLower && wantUpper && wantNumbers) {
      allUserWants = useLowerCase.concat(useUpperCase, useNumbers)
    }
    else if (wantUpper && wantLower) {
      allUserWants = useUpperCase.concat(useLowerCase)
    }
    else if (wantUpper && wantNumbers) {
      allUserWants = useUpperCase.concat(useNumbers)
    }
    else if (wantUpper && wantSymbols) {
      allUserWants = useUpperCase.concat(useSymbols)
    }
    // Randomized generator for allUserWants
    for (var i = 0; i < userNumber; i++) {
      var userWants = allUserWants[Math.floor(Math.random()*allUserWants.length)];
      console.log(userWants);
    }

}



// Figure out way to push reults taken to the text box...?
// Console.log the for loop provides undefined in the text box but provides random concat of choices.
// Can not see any lower case characters in the console.