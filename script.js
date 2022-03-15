//Declare global variables / User Input variables
var enter;
var confirmNumberChoice;
var confirmUppercaseChoice;
var confirmLowercaseChoice;
var confirmSymbolsChoice;
var userChoices;

//List of numeric values
numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//List of uppercase values
uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//List of lowercase values
lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//List of special character values
symbolsList = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', '>', '<', ':', '{', '}', "[", "]", '`\\', '\\' ];  //use double escape because backslash is a special character

//Writes the generated password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Targets the generate password button
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start of generate password function
function generatePassword() {
  enter = parseInt(prompt("Choose how many characters. Values between 8 and 128 are accepted.")); 
  if (!enter) {
    alert('You did not enter a value.'); //checks that the user entered a value
    return 'You did not enter a length.';
  } else if (enter < 8 || enter > 128) {
    enter = alert("Must choose a value between 8 and 128"); //checks that the user entered a value between 8 and 128
    return 'You did not enter a valid length.';
  } else {
    confirmNumberChoice = confirm("Include numerica values?");
    confirmUppercaseChoice = confirm("Include uppercase letters?");
    confirmLowercaseChoice = confirm("Include lowercase letters?");
    confirmSymbolsChoice = confirm("Include symbols (i.e. special characters)?");
  };
    //No options selected
  if (!confirmNumberChoice && !confirmUppercaseChoice && !confirmLowercaseChoice && !confirmSymbolsChoice) { 
    userChoices = alert('No options selected. Please choose at least one option.'); //checks that the user selected at least one of the four character options
    return 'You did not select any character options.'
    //Four options selected 
  } else if (confirmNumberChoice && confirmUppercaseChoice && confirmLowercaseChoice && confirmSymbolsChoice){
    userChoices = numberList.concat(numberList, uppercaseList, lowercaseList, symbolsList);
   //Three options selected
  } else if (confirmNumberChoice && confirmUppercaseChoice && confirmLowercaseChoice) {
    userChoices = numberList.concat(numberList, uppercaseList, lowercaseList);
  } else if (confirmNumberChoice && confirmUppercaseChoice && confirmSymbolsChoice) {
    userChoices = numberList.concat(numberList, uppercaseList, symbolsList);
  } else if (confirmNumberChoice && confirmLowercaseChoice && confirmSymbolsChoice) {
    userChoices = numberList.concat(numberList, lowercaseList, symbolsList);
  } else if (confirmUppercaseChoice && confirmLowercaseChoice && confirmSymbolsChoice) {
    userChoices = uppercaseList.concat(uppercaseList, lowercaseList, symbolsList);
  //Two options selected
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
  //One option selected
  } else if (confirmNumberChoice) {
    userChoices = numberList;
  } else if (confirmUppercaseChoice) {
    userChoices = uppercaseList;
  } else if (confirmLowercaseChoice) {
    userChoices = lowercaseList;
  } else if (confirmSymbolsChoice) {
    userChoices = symbolsList;
  };
  //Password variable array to store the user choices
  passwordArray = [];
  
  //Grabs random values from the user selected options, until the length matches the users chosen password length
  for (var i=0; i < enter; i++) {
    var selectedChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordArray.push(selectedChoices);
  }
  
  //Combines the values from the array into a string and returns the result
  var passwordString = passwordArray.join("");
  return passwordString;
}

