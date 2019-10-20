var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  password = "",
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy");

// initiate generate function with button click
  generateButton.addEventListener("click", generate);

  function generate() {
    var passLength = prompt("How many characters do you want?"),
        isBad = true,
        charPicked = false,
        upperPicked = true,
        lowerPicked = true,
        numPicked = true,
        specialPicked = true;

    // asking for length needed & validating it's within range
    do {
        if (passLength >= 8 && passLength <= 128) {
            //determine if length is good

            isBad = false;
        }
        else {
            alert("Password length must be between 8 and 128 characters.");
            passLength = prompt("How many characters do you want?");
        }
    }
    while (isBad);
    
    // asking the user which character types desired & validating at least one was chosen
    while (!charPicked) {
        upperPicked = confirm("Do you want uppercase letters?");
        
        lowerPicked = confirm("Do you want lowercase letters?");

        numPicked = confirm("Do you want numbers?");

        specialPicked = confirm("Do you want special characters?");

        if (upperPicked || lowerPicked || numPicked || specialPicked) {
            charPicked = true;
        }
        else {
            alert("You must choose at least one type of character.");
        }
    }
    alert("call make pass");
    makePass(upperPicked, lowerPicked, numPicked, specialPicked, passLength);
    document.getElementById("password").innerHTML = password;
}

// computer will create a combo of random choices of the chosen character types until length desired is accomplished
function makePass (upperPicked, lowerPicked, numPicked, specialPicked, passLength) {
    alert("making pass");
    alert("password is " + password + "pass length is " + passLength);

    while (password.length < passLength) {
        if (upperPicked) {
                password+= uppercase.charAt(Math.floor(Math.random()*uppercase.length));
        }
        else if (lowerPicked) {
            for (l = 0; l < lowercase.length; l++) {
                password += lowercase.charAt(Math.floor(Math.random()*lowercase.length));
            }
        }
        else if (numPicked) {
            for (var n = 0; n < numbers.length; n++) {
               console.log(Math.floor(Math.random()*numbers.length));
            }
        }
        else if (specialPicked) {
            for (s = 0; s < specialChar.length; s++) {
                console.log(specialChar.charAt(Math.floor(Math.random()*specialChar.length)));
            }
        }
        
    }
    alert("password is " + password + "pass length is " + passLength);
    return password;
}

  //copy to clipboard button enabled
  
 // activate copy function

  // computer copies password to clipboard