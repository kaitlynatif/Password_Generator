// Assignment Code
var generateBtn = document.querySelector("#generate");
const passwordOutput = document.getElementById('password');

// Declare length as a global variable
var length;

// Declare possibleChoices as a global variable
var possibleChoices = [];
var possibleChoicesString;

// Write password to the password input
function writePassword() {

// VALIDATION: length must be between 8 and 128 characters
// Update length
length = Number(prompt("How many characters would you like your password to contain? Enter a number between 8 and 128."));

// Make individual prompts for lowercase//uppercase//numeric//special characters
// If (length > 8 && length < 128)
// var possibleChoices = [];
var wantNums = confirm('Do you want to use numbers?');
var wantLower = confirm('Do you want to use lowercase characters?');
var wantUpper = confirm('Do you want uppercase characters?');
var wantSpecial = confirm('Do you want special characters?');
console.log(wantNums);
console.log(wantLower);
console.log(wantUpper);
console.log(wantSpecial);

if(wantNums) {
possibleChoices.push('0123456789')
}
if(wantLower) {
possibleChoices.push('abcdefghijklmnopqrstuvwxyz')
}
if(wantUpper) {
possibleChoices.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
}
if(wantSpecial) {
possibleChoices.push('!@#$%^&*()_+')
};

console.log(possibleChoices.join('').split(''));

// Without line 36, our array would like like ['0123456789', 'abcdef', 'ABDCDEF'];
// This line converts our array into an array where each character has its own index
possibleChoices = possibleChoices.join('').split('');

possibleChoicesString = JSON.stringify(possibleChoices);

// Display password
passwordOutput.value = generatePassword();

};

// Generate Password
function generatePassword() {
  // Return Value
  var password = "";
  // Utilize length in a different function
  for (var i = 0; i < length; i++) {
  // Picks a character within charSet at index of random number
  password += possibleChoicesString.charAt(Math.floor(Math.random() * possibleChoicesString.length));
  }
  return password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);