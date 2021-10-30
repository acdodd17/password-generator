// Assignment code here
var generatePassword = function () {
  console.log("New password being created!");
  var newPassword = " ";
  var charList = "";

  // prompt passowrd length
  var getPassLength = function () {
    var passLength = window.prompt(
      "How long would you like your password to be? Please choose a length between 8 and 128"
    );
    passLength = parseInt(passLength);
    if (passLength >= 8 && passLength <= 128) {
      console.log(passLength);
      return passLength;
    } else if (passLength < 8 || passLength > 128 || undefined) {
      passLength = window.prompt("Enter a number of at least 8 and no more than 128!");
      console.log(passLength);
      return passLength;
    } 
  };

  var passCriteria = {
    length: getPassLength(),
    lower: window.confirm("Would you like to include lowercase characters?"),
    upper: window.confirm("Would you like to include uppercase characters?"),
    numeric: window.confirm("Would you like to include numbers?"),
    special: window.confirm("Would you like to include special characters?")
  };

  if (passCriteria.lower === true) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    charList = charList + lowercase;
  }
  if (passCriteria.upper === true) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charList = charList + uppercase;
  }
  if (passCriteria.numeric === true) {
    var numeric = "0123456789";
    charList = charList + numeric;
  }
  if (passCriteria.special === true) {
    var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    charList = charList + special;
  }
  
  for (var i = 0; i < passCriteria.length; i++) {
    newPassword += charList.charAt(Math.floor(Math.random() * charList.length));
  }

  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
