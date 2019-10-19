var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordField = document.getElementById("pass-field"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;

  generateButton.addEventListener("click", generate);

  function generate() {
    var passLength = prompt("How many characters do you want?");

    // alert("You picked " + charNum);

    if (passLength > 8 && passLength < 128) {
        
        // alert("length is good")
    }
    else {
        alert("Password length must be between 8 and 128 characters.");
    }
    


  }

