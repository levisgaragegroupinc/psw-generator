// Assignment Code

//Declare global variables. User Input variables.
var enter;
var confirmNumberChoice;
var confirmUppercaseChoice;
var confirmLowercaseChoice;
var confirmSymbolsChoice;
var userChoices;

//List of numeric values.
numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numberList); //for testing purposes only
// console.log(numberList.length); // length is 10

//List of uppercase values.
uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// console.log(uppercaseList); //for testing purposes only
// console.log(uppercaseList.length); // length is 26

//List of lowercase values.
lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// console.log(lowercaseList); //for testing purposes only
// console.log(lowercaseList.length); // length is 26

//List of special character values.
symbolsList = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', '>', '<', ':', '{', '}', "[", "]", ];
// console.log(symbolsList); //for testing purposes only
// console.log(symbolsList.length); // length is 19

//KEEP THIS CODE
var generateBtn = document.querySelector("#generate");
//KEEP THIS CODE

// Write password to the #password input
//KEEP THIS CODE
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//KEEP THIS CODE

// Add event listener to generate button
//KEEP THIS CODE
generateBtn.addEventListener("click", writePassword);
//KEEP THIS CODE

//Start of generate password function
function generatePassword() {
  enter = parseInt(prompt("Choose how many characters. Values between 8 and 128 are accepted."));
  if (!enter) {
    alert('You did not enter a value.');
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Must choose a value between 8 and 128"));
  }else {
    confirmNumberChoice = confirm("Include numerica values?");
    confirmUppercaseChoice = confirm("Include uppercase letters?");
    confirmLowercaseChoice = confirm("Include lowercase letters?");
    confirmSymbolsChoice = confirm("Include symbols (i.e. special characters)?");
  };
    // no options selected
  if (!confirmNumberChoice && !confirmUppercaseChoice && confirmLowercaseChoice && confirmSymbolsChoice) {
    userChoices = alert('No options selected. Please choose at least one option.');
    // four options selected 
  } else if (confirmNumberChoice && confirmUppercaseChoice && confirmLowercaseChoice && confirmSymbolsChoice){
    userChoices = numberList.concat(numberList, uppercaseList, lowercaseList, symbolsList);
   // three options selected
  } else if (confirmNumberChoice && confirmUppercaseChoice && confirmLowercaseChoice) {
    userChoices = numberList.concat(numberList, uppercaseList, lowercaseList);
  } else if (confirmNumberChoice && confirmUppercaseChoice, confirmSymbolsChoice) {
    userChoices = numberList.concat(numberList, uppercaseList, symbolsList);
  } else if (confirmNumberChoice && confirmLowercaseChoice, confirmSymbolsChoice) {
    userChoices = numberList.concat(numberList, lowercaseList, symbolsList);
  } else if (confirmUppercaseChoice && confirmLowercaseChoice, confirmSymbolsChoice) {
    userChoices = uppercaseList.concat(uppercaseList, lowercaseList, symbolsList);
  // two options selected
  } else if (confirmNumberChoice && confirmUppercaseChoice) {
    userChoices = numberList.concat(numberList, uppercaseList);
  } else if (confirmNumberChoice && confirmLowercaseChoice) {
    userChoices = numberList.concat(numberList, lowercaseList);
  } else if (confirmNumberChoice && confirmSymbolsChoice) {
    userChoices = numberList.concat(numberList, symbolsList);
  } else if (confirmUppercaseChoice && confirmLowercaseChoice) {
    userChoices = uppercaseList.concat(uppercaseList, lowercaseList);
  } else if (confirmUppercaseChoice && confirmSymbolsChoice) {
    userChoices = uppercaseList.concat(uppercaseList, symbolsList);
  } else if (confirmLowercaseChoice && confirmSymbolsChoice) {
    userChoices = lowercaseList.concat(lowercaseList, symbolsList);
  }
  // one option selected
    else if (confirmNumberChoice) {
    userChoices = numberList;
  } else if (confirmUppercaseChoice) {
    userChoices = uppercaseList;
  } else if (confirmLowercaseChoice) {
    userChoices = lowercaseList;
  } else if (confirmSymbolsChoice) {
    userChoices = symbolsList;
  }
  
  // Password length variable
  var passwordLength = [];
  
  //Grabs random values from user selected options
  for (var i=0; i < enter; i++) {
    var selectedChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordLength.push(selectedChoices);
  }

  var password = passwordLength.join("");
  writePassword(password);
  return password;
};


//NOTES
//STEPS
//1. need to prompt the user with the password criteria
//a. password length between 8 and 128
//b. what character types: uppercase, lowercase, special characters, numbers
//2. validate the input
//3. generate the password
//5. display the password on the page

//Characterset 
//0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+?><:{}[]'


//Grab a random item out of the array. DO NOT DELETE
// var randomNumber = numberList[Math.floor(Math.random()*numberList.length)];
// console.log(randomNumber);

// var randomUppercase = uppercaseList[Math.floor(Math.random()*uppercaseList.length)];
// console.log(randomUppercase);

// var randomLowercase = lowercaseList[Math.floor(Math.random()*lowercaseList.length)];
// console.log(randomLowercase);

// var randomSymbol = symbolsList[Math.floor(Math.random()*symbolsList.length)];
// console.log(randomSymbol);
//Grab a random item out of the array. DO NOT DELETE

//Create an array for the random item arrays.
// const randomArrayList = [randomNumber, randomUppercase, randomLowercase, randomSymbol];
// var selectRandomArrayList = randomArrayList[Math.floor(Math.random()*randomArrayList.length)];
// console.log(selectRandomArrayList);






//Add items to the end of an array. Use push(). DO NOT DELETE
// const temporaryPasswordArray = [];
// temporaryPasswordArray.push(randomNumber, randomUppercase, randomLowercase, randomSymbol);
// console.log(temporaryPasswordArray);
//Add items to the end of an array. Use push(). DO NOT DELETE


// generate random lower case character
// return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// generate random upper case character
// return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// generate random number betwee 0 and 9
// return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// generate rancom symbol
// const symbols = '!@#$%^&*(){}[]+<>/,.';
// return symbols[Math.floor(Math.random() * symbols.length)];}

//Create a window prompt()
//let person = prompt('Enter password length between (8 - 128))
//if (person != null) {}

// length
// the length property returns the length of a string let length = text.length

//NOTES from office hours
//Javascript alert, confirm and prompt. JavaScript Popup Boxes. https://www.w3schools.com/js/js_popup.asp
//

//We nee to know the length of the password
//Prompt
// 

//Pseudo coding
// 1. Get user preferences
// 2. Create buckets for each character type. Use an array to create our buckets. *DONE
// 3. Identify and collect the buckets the user has chosen into a temporary location to pull our final values for the password.
// 4. Create a gauranteed collection. Another spot where we make sure that we have at least one. 
// 5. Create a password variable. var password = ''; or we can have an array and push things onto it.
// 5. Randomly draw a character. 
// 7. Put that character on the password variable (?)
// 8. Repeat the function as many times as the user specified.
// 9. Loop through the gauranteed elements, replace elements in password array. 
// 10. Make our array of characters into a string. Join characters in the password array into a string. 
// 11. Return the password string 
//writePassword) is being used when it is called. The paranthesis are important, when we don't use () we are not calling it.

// function myFunction() {
//   var txt;
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }


// let person = prompt("Please specifiy password length between 8 and 128", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }