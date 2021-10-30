// Assignment code here
var generatePassword = function () {
  console.log("New password being created!");
  var newPassword = " ";

  // prompt passowrd length
  var getPassLength = function () {
    var passLength = window.prompt(
      "How long would you like your password to be? Please choose a length between 8 and 128"
    );
    passLength = parseInt(passLength);
    if (passLength >= 8 && passLength <= 128) {
      console.log(passLength);
      return passLength;
    } else passLength < 8 || passLength > 128 || undefined;
    {
      window.prompt("Enter a number of at least 8 and no more than 128!");
    }
  };


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
