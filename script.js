// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var numberList = "1234567890"
var specialList = "!@#$%^&*()"


function generatePassword() {


// OUTLINE
// I want to prompt the user the length they want their password
// if it bellow 8 or above 128, tell them the paramaters. 

var length = prompt("How many characters would you like your password to be?");
console.log(length);
// I want to store their answer
// Prompt the user if they want lowercase
var lower = confirm("Would you like to use lower case letters?")
console.log(lower);
// I want to store their answer
// Prompt the user if they want UPPERCASE
var upper = confirm("Would you like to use upper case letters?")
console.log(upper);
// I want to store their answer
// Prompt the user if they want numbers
var number = confirm("Would you like to use numbers?")
console.log(number);
// I want to store their answer
// Prompt the user if they want special char
var special = confirm("Would you like to use special characters?")
console.log(special);
// I want to store their answer

// Write an algorythm that creates a random string, based on the answers given in the above prompts. 


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
