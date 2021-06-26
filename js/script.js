

//background
var h = $('.background').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 2 + 'ms');
    flagElement.css('-moz-animation-delay', i * 2 + 'ms');
    flagElement.css('-ms-animation-delay', i * 2 + 'ms');
    flagElement.css('animation-delay', i * 2 + 'ms');
    $('.background').append(flagElement);
}


$("#myDropdown").hide();
$(".dropbtn").click(function(e){
  $("#myDropdown").show('slow');
})

$(':not(#myDropdown)').click(function(e) {
  $('#myDropdown').hide();
});
 
//Group all fields into an object
//Linking all the fields to our fields object

 let fields = {};
 document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.newsletter = document.getElementById('newsletter');
  fields.question = document.getElementById('question');
 })

//Checking the values entered in the contact form
//Checking that the field is not empty
 function isNotEmpty(value) {
  if (value == null || 
      typeof value == 'undefined' ) 
      return false;
        return (value.length > 0);
    }

//Checking that the field value is a number
  function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
    }

//Check if a string is an email
  function isEmail(email) {
      let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return regex.test(String(email).toLowerCase());
     }

//Field validation function
function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

//isValid function - combine all the checks
function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.question, isNotEmpty);

  return valid;
 }


//Making User class and sending contact form with constructor
 class User {
  constructor(firstName, lastName, email, newsletter, question) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.newsletter = newsletter;
  this.question = question;
  }
 }

//Sending the form data with JavaScript
function join() {
  if (isValid()) {
    let usr = new User (firstName.value, lastName.value, email.value, newsletter.checked);

    alert(`${usr.firstName}You joined the Republic of Piracy`);
  } else {
    alert ("Arg! Error!");
  }
}



 // Checkers is a two player game. Each player starts with 12 colored discs (of the same color). Typically Checker discs come in sets of black and red.
// A Checker board has 64 squares of alternating colors, 32 light and 32 dark squares.
// Players place their discs (pieces) on the dark squares on their side of the board.
// Black has first play, after turns alternate.
// Moves can only be made on black squares, so the pieces move diagonally. Pieces can only move in a forward direction, toward their opponent.
// If you are moving your disc forward, and not capturing your opponent’s piece in the move, you may only move it forward one square.
// In a capturing move, a piece leaps of the opponents piece in a diagonal line, landing on a dark square on the other side. While you can only capture one piece per jump you can make multiple jumps in a single turn, if the positioning of the pieces allows.
// After a piece is captured, it is removed from the board, and collected by the opponent.
// If you have the ability to jump your opponents pieces, you must. However, in the even there are more than one capture possible from a single square, you may jump whichever piece is preferable.
// Once a piece reaches the first row of their opponents side of the board (conversely, the row farthest from the player who controls the piece), that piece is kinged, or becomes a king, and is crowned with a piece that had been captured by the opponent. King’s stand twice as tall as a single piece.
// Kings can only move diagonally as well, however they can move forward or backward as opposed to single pieces.
// Kings can also jump both forward and backward (diagonally) in the same turn, a multi-direction multi-jump.
// The game is won when the opponent is unable to make a move. This can happen one of two ways: the entirety of a player’s pieces were captured by the opponent, or a player’s pieces are all blocked from moving.

// url('https://i.postimg.cc/FzgYZjWT/4-B5-AB85-E-11-A3-4-A78-8-CB9-F983-ED508303.jpg');

// .flag {
//   width: 1600px;
//   height: 1000px;
//   margin-top: -40px;
//   margin-left: -10px;
//   margin-bottom: -900px;
// }