var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy");

  generateButton.addEventListener("click", generate);

  function generate() {
    var passLength = prompt("How many characters do you want?"),
        isBad = true,
        charPicked = false,
        upperPicked = true,
        lowerPicked = true,
        numPicked = true,
        specialPicked = true;

    // alert("You picked " + charNum);
    do {
        if (passLength > 8 && passLength < 128) {
            //determine if length is good

            isBad = false;
        }
        else {
            alert("Password length must be between 8 and 128 characters.");
            passLength = prompt("How many characters do you want?");
        }
    }
    while (isBad);
    
    while (!charPicked) {
        upperPicked = confirm("Do you want uppercase letters?");
        
        lowerPicked = confirm("Do you want lowercase letters?");

        numPicked = confirm("Do you want numbers?");

        specialPicked = confirm("Do you want special characters?");

        if (upperPicked || lowerPicked || numPicked || specialPicked) {
            charPicked = true;
        }

    }
    


  }

