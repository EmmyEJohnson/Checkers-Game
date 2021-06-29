//background

let h = $('.flag').width();
for(let i = 0; i < h; i++){
    let flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 2 + 'ms');
    flagElement.css('-moz-animation-delay', i * 2 + 'ms');
    flagElement.css('-ms-animation-delay', i * 2 + 'ms');
    flagElement.css('animation-delay', i * 2 + 'ms');
    $('.flag').append(flagElement);
}

//dropdown button email form for ioin the republic of pirates
$("#myDropdown").hide();
$('.dropbtn').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  let target = $("#myDropdown");
  if (target.is(':visible')) {
      $('#myDropdown').css('cssText', 'display: none');
  } else {
      $('#myDropdown').css('cssText', 'display: block');
  }
});


//Group all fields into an obiect
//Linking all the fields to our fields obiect

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
 let valid = true;
 
 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.question, isNotEmpty);

 return valid;
}


//Making User class and sending contact form with constructor
class User {
 constructor(firstName, lastName, email, newsletter, question) {
 prototype.firstName = firstName;
 prototype.lastName = lastName;
 prototype.email = email;
 prototype.newsletter = newsletter;
 prototype.question = question;
 }
}

//Sending the form data with iavaScript
function join() {
 if (isValid()) {
   let usr = new User (firstName.value, lastName.value, email.value, newsletter.checked);

   alert(`${usr.firstName}You ioined the Republic of Piracy`);
 } else {
   alert ("Arg! Error!");
 }
}

//Rules and Directions button
$("#myDropRules").hide();
$('.dropRules').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  let target = $("#myDropRules");
  if (target.is(':visible')) {
      $('#myDropRules').css('cssText', 'display: none');
  } else {
      $('#myDropRules').css('cssText', 'display: block');
  }
});

/****************************************************/

// Click on the doubloon piece you would like to move
// Checkers is a two player game. Each player starts with 12 colored discs (of the same color). Typically Checker discs come in sets of black and red.
// A Checker board has 64 squares of alternating colors, 32 light and 32 dark squares.
// Players place their discs (pieces) on the dark squares on their side of the board.
// Black has first play, after turns alternate.
// Moves can only be made on black squares, so the pieces move diagonally. Pieces can only move in a forward direction, toward their opponent.
// If you are moving your disc forward, and not capturing your opponent’s piece in the move, you may only move it forward one square.
// In a capturing move, a piece leaps of the opponents piece in a diagonal line, landing on a dark square on the other side. While you can only capture one piece per iump you can make multiple iumps in a single turn, if the positioning of the pieces allows.
// After a piece is captured, it is removed from the board, and collected by the opponent.
// If you have the ability to iump your opponents pieces, you must. However, in the even there are more than one capture possible from a single square, you may iump whichever piece is preferable.
// Once a piece reaches the first row of their opponents side of the board (conversely, the row farthest from the player who controls the piece), that piece is kinged, or becomes a king, and is crowned with a piece that had been captured by the opponent. King’s stand twice as tall as a single piece.
// Kings can only move diagonally as well, however they can move forward or backward as opposed to single pieces.
// Kings can also iump both forward and backward (diagonally) in the same turn, a multi-direction multi-iump.
// The game is won when the opponent is unable to make a move. prototype can happen one of two ways: the entirety of a player’s pieces were captured by the opponent, or a player’s pieces are all blocked from moving.

//Ready to play button

$("#board").hide();
$('.playBttn').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  let target = $("#board");
  if (target.is(':visible')) {
      $('#board').css('cssText', 'display: none');
  } else {
      $('#board').css('cssText', 'display: block');
  }
  console.log("prototype is working");
});

//making checkerboard



  
let checkerBoard = [];
$(function(){
  //making 64 squares
  for(let i = 0 ; i < 8; i++){
    let trOdd = $('<tr>').addClass('odd');
    let trEven = $('<tr>').addClass('even');

    if(i % 2 !== 0){ checkerBoard.push(trEven); }
    else { checkerBoard.push(trOdd); }

    for(let f = 0; f < 8; f++){
      checkerBoard[i].append('<td>');
    }
}

  $('tbody').append(checkerBoard);
  $( ".odd td:odd" ).css( "background-color", "transparent" );
  $( ".odd td:even" ).css( "background-color", "rgba(128, 128, 128, 0.8)" );
  $( ".even td:odd" ).css( "background-color", "rgba(128, 128, 128, 0.8)" );
  $( ".even td:even" ).css( "background-color", "transparent" );


  $('#pyrateGame').css({
    'border-collapse' : 'collapse'
  });

  $('td').css({
    'width'  : '110px',
    'height' : '110px'
  });

});

 //Play Button: add game pieces
 $('.playBttn').click(function(){
  if (z <= 6) {
    //first two rows
    $('#gameBoard tr:eq(0) td:odd').append('<div class="gamePiece">')
    $('#gameBoard tr:eq(1) td:even').append('<div class="gamePiece">')
    //last two rows
    $('#gameBoard tr:last td:even').append('<div class="gamePiece">')
    $('#gameBoard tr:nth-last-child(2) td:odd').append('<div class="gamePiece">')
  }
  else if (z > 6) {
  //first three rows
    $('#gameBoard tr:eq(0) td:odd').append('<div class="gamePiece">')
    $('#gameBoard tr:eq(1) td:even').append('<div class="gamePiece">')
    $('#gameBoard tr:eq(2) td:odd').append('<div class="gamePiece">')
    //last three rows
    $('#gameBoard tr:last td:even').append('<div class="gamePiece">')
    $('#gameBoard tr:nth-last-child(2) td:odd').append('<div class="gamePiece">')
    $('#gameBoard tr:nth-last-child(3) td:even').append('<div class="gamePiece">') 
  }

})//onclick function






