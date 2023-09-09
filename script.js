// WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria
// Assignment Code
// This line targets the generate id in HTML
var generateBtn = document.querySelector("#generate");

// Character length should be between 8 and 128 characters.  Store in variable called "passwordLength".
var passwordLength = 8;
var approvedCharacters = [];

// Need to start off by adding variables for numbers, lowercase letters, uppercase letters, and special characters.
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"];

// Create a generate password function here.
// Possibly utilize Math.floor() and Math.random()

//WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters
// Prompt user for character length.  Verify length is between 8 and 128 characters long.
// If statement.  If the length is not between 8 and 128 characters long, keep prompting until it is.

//WHEN asked for character types to include in the password, THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Ask user if they want to include:
   // Numbers
   // Lowercase Letters
   // Uppercase Letters
   // Special Characters

// Write password to the #password input
function writePassword() {
  
//WHEN all prompts are answered, THEN a password is generated that matches the selected criteria
//WHEN the password is generated, THEN the password is either displayed in an alert or written to the page

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 }
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
