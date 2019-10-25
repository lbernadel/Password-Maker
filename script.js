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
    
    makePass(upperPicked, lowerPicked, numPicked, specialPicked, passLength);

    // computer will display the password for the user
    document.getElementById("password").innerHTML = password;

    // enable copy button once password appears
    enableCopy();
}

// computer will create a combo of random choices of the chosen character types until length desired is accomplished
function makePass (upperPicked, lowerPicked, numPicked, specialPicked, passLength) {

    while (password.length < passLength) {
        if (upperPicked) {
            password+= uppercase.charAt(Math.floor(Math.random()*uppercase.length));
        }
        
        if (lowerPicked) {
            password += lowercase.charAt(Math.floor(Math.random()*lowercase.length));
        }
        
        if (numPicked) {
            password+= Math.floor(Math.random()*numbers.length);
        }
        
        if (specialPicked) {
            password+= specialChar.charAt(Math.floor(Math.random()*specialChar.length));
        }
    }

    return password;
}

//copy to clipboard button enabled
function enableCopy () {
    if (generate) {
        document.getElementById("copy").removeAttribute("disabled");
    }
}

// initiate copy function by clicking Copy button
copyButton.addEventListener("click", copy);

// computer copies password to clipboard
function copy (password) {
    if (password) {
        var copyPass = document.getElementById("password").textContent;
        copyPass.execCommand("contentReadOnly", false)
        document.execCommand("copy");
    }
}