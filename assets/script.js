// var userPass = {
//   upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lower: "abcdefghijklmnopqrstuvwxyz",
//   number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   symbol: "!#$%&'()*+,-./:;<=>?@[\}^_`{|}~",
//   metRequire: true
// }





























// var a = 8;
// var expression1 = true
// var b = 128;
// var expression2 = (b > 128);









// if (expression1 && expression 2){
//    // then move to next step
// }
  


// if (expression1) {
//   alert("Your password has a limit of 128 characters.");
// }

// if (expression2) {
//   alert("Your password must contain at least 8 characters.")
// }
































// function randomLower() {

//   return passLower[Math.floor(Math.random()*passLower.length)];

// }

// function randomSymbol() {

//   return passSymbol[Math.floor(Math.random()*passSymbol.length)];

// }

// function randomUpper() {

//   return passUpper[Math.floor(Math.random()*passUpper.length)];

// }

// function randomNumber() {

//   return passNumber[Math.floor(Math.random()*passNumber.length)];

// }

// console.log(randomSymbol());





// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 function charLimit() {
  var userCharNumber = prompt("How many characters is your password?")
}