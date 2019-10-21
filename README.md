# [Password-Maker](https://lbernadel.github.io/Password-Maker/)

![Webpage](/password-page.jpg)

## Description
The purpose of this project was to create a random password generating application for company with employees who have access to sensitive company information. The application prompts the user for selection of the following criteria:

- Length of 8 to 128 characters
- At least one of these character types:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Special characters

The application validates that the user choose a length within range and at least one character type prior to generating a random password. Once a password is created, it appears and the user is able to copy it to their clipboard to save elsewhere.

## Challenges
This was harder than I thought. I understood the basics of what to do, but putting it together was another story. I do feel like I understand more about how to use functions in JavaScript now. It can still be quite confusing though. The only thing I couldn't figure out was how to generate and display a new password without having to refresh the page. It was confusing to figure out where I went wrong in the code without inserting temporary debugging code, but eventually I got it. Need to remember to test in smaller pieces.

I am still staying up at odd hours to complete things until they work. One day, I'll figure out how to stop doing that.

Also, shout out to my dad for explaining the way to organize JS keywords, functions, and statements!


### Sources
Google is my best friend. It's probably yours too. It helped me find these lifesaving resources during my times of struggle and frustration:

Understanding the basic properties of JS:
- https://www.w3schools.com/js/js_functions.asp
- https://www.w3schools.com/js/js_statements.asp
- https://www.w3schools.com/jsref/jsref_operators.asp
- https://www.w3schools.com/js/js_loop_while.asp

Generating random characters:
- https://webdevtrick.com/javascript-random-password-generator/
- https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php
- https://www.java67.com/2015/01/how-to-get-random-number-between-0-and-1-java.html
- https://www.mediacollege.com/internet/javascript/number/random.html

Using JS + HTML DOM:
- https://www.w3schools.com/jsref/prop_html_innerhtml.asp
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://www.w3schools.com/js/js_htmldom_html.asp
- https://www.w3schools.com/jsref/met_element_removeattribute.asp
- https://stackoverflow.com/questions/27238510/bootstrap-enable-button-on-input

Enabling Clipboard Use:
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
- https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
