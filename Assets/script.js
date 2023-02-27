// Assignment Code
var generateBtn = document.querySelector("#generate");
const passwordOutput =  document.getElementById('#password');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = Number(prompt("How many characters would you like your password to contain? Enter a number between 8 and 128."));
  var charType = prompt("What character types would you like to include? Enter 'lowercase', 'uppercase', 'numeric', and/or 'special' characters.");
  window.alert("Your password will contain " + length + " characters and will include " + charType + " characters.");
  var charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "numeric") {
    charSet = "0123456789";
  } else if (charTypeLower === "special") {
    charSet = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "lowercase, uppercase") {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "lowercase, numeric") {
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (charTypeLower === "lowercase, special") {
    charSet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "uppercase, numeric") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (charTypeLower === "uppercase, special") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "numeric, special") {
    charSet = "0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "lowercase, uppercase, numeric") {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (charTypeLower === "lowercase, uppercase, special") {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "lowercase, numeric, special") {
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "uppercase, numeric, special") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else if (charTypeLower === "lowercase, uppercase, numeric, special") {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  } else {
    alert("Please enter a valid character type.");
  }

  passwordText.value = password;

  // Generate Password
  function generatePassword() {
    // Return Value
    var password = "";
    for (var i = 0; i < length; i++) {
      // Picks a character within charSet at index of random number
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return password;

  }
  alert(generatePassword());

  // Display password
  // document.getElementById("#password").innerHTML = password;
  passwordOutput.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);