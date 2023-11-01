// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// OUTLINE
// I want to prompt the user the length they want their password
// if it bellow 8 or above 128, tell them the paramaters. 
// I want to store their answer
// Prompt the use if they want lowercase
// Prompt the use if they want UPPERCASE
// Prompt the use if they want numbers
// Prompt the use if they want special car

// Profit



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
