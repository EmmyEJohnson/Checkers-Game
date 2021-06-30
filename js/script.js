//landing page

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

/****************************************************/

// Click on the doubloon piece you would like to move
// Checkers is a two player game. Each player starts with 12 colored discs (of the same color). Typically Checker discs come in sets of gold and red.
// A Checker board has 64 squares of alternating colors, 32 light and 32 dark squares.
// Players place their discs (pieces) on the dark squares on their side of the board.
// gold has first play, after turns alternate.
// Moves can only be made on gold squares, so the pieces move diagonally. Pieces can only move in a forward direction, toward their opponent.
// If you are moving your disc forward, and not capturing your opponent’s piece in the move, you may only move it forward one square.
// In a capturing move, a piece leaps of the opponents piece in a diagonal line, landing on a dark square on the other side. While you can only capture one piece per iump you can make multiple iumps in a single turn, if the positioning of the pieces allows.
// After a piece is captured, it is removed from the board, and collected by the opponent.
// If you have the ability to iump your opponents pieces, you must. However, in the even there are more than one capture possible from a single square, you may iump whichever piece is preferable.
// Once a piece reaches the first row of their opponents side of the board (conversely, the row farthest from the player who controls the piece), that piece is kinged, or becomes a king, and is crowned with a piece that had been captured by the opponent. King’s stand twice as tall as a single piece.
// Kings can only move diagonally as well, however they can move forward or backward as opposed to single pieces.
// Kings can also iump both forward and backward (diagonally) in the same turn, a multi-direction multi-iump.
// The game is won when the opponent is unable to make a move. prototype can happen one of two ways: the entirety of a player’s pieces were captured by the opponent, or a player’s pieces are all blocked from moving.




//checkerboard game page

/*Global Variables
    Variable to store the players class and the captain class:*/
    let playerOne = "playerOne";
    playerTwo = "playerTwo";
    captain = "captain";

//  Variable to store the player's turn and which piece is selected:
    game = {turn: playerOne,
            selected: false};

//Function to reset 
function restart(){
  
  //First clear all the pieces from the previous board
  let empty = $("#board li").slice(0, 32);  
  empty.attr("class", "");
  empty.attr("id", "");
  
  //Place all the pieces for a new game
  let ones = $("#board li").slice(0, 12);
  let twos = $("#board li").slice(20, 32);
  ones.attr("class", playerOne);
  twos.attr("class", playerTwo);
  
  //Reset the values of game
  game.turn = playerOne;
  game.selected = false;
}

function placePiece(player, x, y){
  x = parseInt(x);
  y = parseInt(y);
  let piece = $("#board li").slice((y*4+x), (y*4+x+1));
  $(piece).attr("class", player);
}

function clearPiece(x, y){
  x = parseInt(x);
  y = parseInt(y);
  let piece = $("#board li").slice((y*4+x), (y*4+x+1)); 
  $(piece).removeClass(playerOne + " captain " + playerTwo); 
  $(piece).removeAttr("id");
}

function input(piece){
  //Check if there was a previous selected piece
  if(!game.selected){
    //Check if the selected piece belongs to the current player
    if($(piece).attr("class") != game.turn){
      alert("Please select a valid piece.");
      return;
    }
    //Store the selected piece in memory
    game.selected = {x: null, y: null, piece: piece};
    game.selected.y = ($(piece).attr("data-row"));
    game.selected.x = ($(piece).attr("data-column"));
    
    //Add the selected id to the piece
    $(piece).attr("id", "selected");
  }else{
    //Check if the clicked piece is the same as the selected piece
    if(game.selected.x == $(piece).attr("data-column") && game.selected.y == $(piece).attr("data-row")){
      game.selected = false;
      $(piece).attr("id", "");
      return;
    }
    if(game.selected.y == $(piece).attr("data-row")){
      alert("Not a valid move");
      return;
    }
    if($(piece).hasClass(playerOne) || $(piece).hasClass(playerTwo)){
      alert("Please select a valid move.");
      return;
    }
    if($(game.piece).hasClass("captain")){
      handlecaptain(piece);
      return;
    }
    if(game.turn == playerOne){
      clearPiece(game.selected.x, game.selected.y);
      placePiece(playerOne, $(piece).attr("data-column"), $(piece).attr("data-row"));
      game.turn = playerTwo;
      game.selected = false;
      return;
    }
    if(game.turn == playerTwo){
      clearPiece(game.selected.x, game.selected.y);
      if(game.selected.y - $(piece).attr("data-row") != 1)
        clearPiece(Math.abs(game.selected.x-$(piece).attr("data-column")), game.selected.y-1);
      placePiece(playerTwo, $(piece).attr("data-column"), $(piece).attr("data-row"));
      game.turn = playerOne;
      game.selected = false;
      return;
    }
  }  
}

$(document).ready(function(){ 
  restart();
  //Add functionality to all the playable spaces
  $("#board li").click(function(){
    input($(this));
  });
  
  //Add functionality to the restart button;
  $("#restart").click(function(){
    restart();
  });
})

//******** things to work on later ******

//making checkerboard

// let checkerBoard = [];
// $(function(){
//   //making 64 squares
//   for(let i = 0 ; i < 8; i++){
//     let trOdd = $('<tr>').addClass('odd');
//     let trEven = $('<tr>').addClass('even');

//     if(i % 2 !== 0) { 
//       checkerBoard.push(trEven); 
//     }
//     else { 
//       checkerBoard.push(trOdd); 
//     }

//     for(let f = 0; f < 8; f++) {
//       checkerBoard[i].append('<td>');
//     }
// }

//   $('tbody').append(checkerBoard);
//   $( ".odd td:odd" ).css( "background-color", "transparent" );
//   $( ".odd td:even" ).css( "background-color", "rgba(128, 128, 128, 0.8)" );
//   $( ".even td:odd" ).css( "background-color", "rgba(128, 128, 128, 0.8)" );
//   $( ".even td:even" ).css( "background-color", "transparent" );


//   $('#pyrateGame').css({
//     'border-collapse' : 'collapse'
//   });

//   $('td').css({
//     'width'  : '110px',
//     'height' : '110px'
//   });

// });

// let reds = document.querySelectorAll("tr:nth-child(-n+3) div");
// let blacks = document.querySelectorAll("tr:nth-child(n+6) div");

// const clicked = e => {
//   e.target.classList.toggle("active");

//   let color = e.target.classList.contains("red") ? "red" : "gold";
//   let crowned = e.target.classList.contains("crowned") ? true : false;

//   //Disable or enable non active pieces
//   if (color === "red") {
//     for (red of reds) {
//       red.classList.toggle("disabled");
//     }
//   } else {
//     for (gold of blacks) {
//       gold.classList.toggle("disabled");
//     }
//   }

//   e.target.classList.remove("disabled");

//   let cell = e.path[1].cellIndex;
//   let row = e.path[2].rowIndex;

//   let options = findOptions(color, row, cell, crowned);

//   //Loop through all options, checking if each one is already displaying or not.
//   //If the option is already being displayed remove it, if not then display it and then call the move function inside of the onclick.
//   options.forEach(function(option) {
//     if (option.position) {
//       if (option.position.classList.contains("options")) {
//         option.position.classList.remove(...option.position.classList);
//         option.position.classList.remove(color);
//       } else if (!option.position.classList.contains(color)) {
//         option.position.classList.add("options");
//         option.position.classList.add(color);
//         if (crowned) {
//           option.position.classList.add("crowned");
//         }
//         option.position.onclick = function callHandler(event) {
//           move(event, e.target, options, color, option.eat);
//         };
//       }
//     }
//   });
// };

// const move = (e, prevPos, otherOptions, color, eat) => {
//   let crowned = e.target.classList.contains("crowned") ? true : false;
//   //Display the piece in the new position by removing the options class.
//   e.target.classList.remove("options");
//   //Remove the previous position
//   prevPos.classList.remove(...prevPos.classList);
//   prevPos.removeEventListener("click", clicked);
//   e.target.onclick = null;
//   //Remove all other options
//   otherOptions.forEach(function(otherOption) {
//     if (otherOption.position) {
//       if (otherOption.position.classList.contains("options")) {
//         otherOption.position.classList.remove(
//           ...otherOption.position.classList
//         );
//         otherOption.position.onclick = null;
//       }
//     }
//   });

//   if (eat.state) {
//     //Remove the piece that was eaten
//     eat.pos.classList.remove(...eat.pos.classList);
//     eat.pos.removeEventListener("click", clicked);
//     let cell = e.path[1].cellIndex;
//     let row = e.path[2].rowIndex;
//     //Check if there's a posibility of another jump by calling the findOptions func again
//     let options = findOptions(color, row, cell, crowned);
//     options.forEach(function(option) {
//       if (option.eat.state && !option.position.classList.contains(color)) {
//         option.position.classList.add("options");
//         option.position.classList.add(color);
//         e.target.classList.add("active");
//         if (crowned) {
//           option.position.classList.add("crowned");
//         }
//         option.position.onclick = function callHandler(event) {
//           move(event, e.target, options, color, option.eat);
//         };
//       } else {
//         changeTurn(color);
//       }
//     });
//   } else {
//     changeTurn(color);
//   }

//   if (e.path[2].rowIndex === 0 || e.path[2].rowIndex === 7) {
//     crown(e.target);
//   }
// };

// const findOptions = (color, row, cell, crowned) => {
//   let option1 = {
//       position: null,
//       eat: { state: false, pos: null }
//     },
//     option2 = {
//       position: null,
//       eat: { state: false, pos: null }
//     },
//     option3 = {
//       position: null,
//       eat: { state: false, pos: null }
//     },
//     option4 = {
//       position: null,
//       eat: { state: false, pos: null }
//     };

//   if (color === "red") {
//     //Declare the initial values for the first 2 options
//     option1.position = document.querySelector(
//       `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell}) div`
//     );

//     option2.position = document.querySelector(
//       `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell + 2}) div`
//     );

//     if (option1.position) {
//       if (option1.position.classList.contains("gold")) {
//         //If the option contains a gold piece check the row and column, relevant for a possible jump.
//         option1.position = document.querySelector(
//           `tr:nth-of-type(${row + 3}) td:nth-of-type(${cell - 1}) div`
//         );
//         if (option1.position) {
//           //Check for a possible jump.
//           if (option1.position.classList.contains("gold")) {
//             option1.position = null;
//           } else {
//             option1.eat.state = true;
//             option1.eat.pos = document.querySelector(
//               `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell}) div`
//             );
//           }
//         }
//       }
//     }

//     if (option2.position) {
//       if (option2.position.classList.contains("gold")) {
//         option2.position = document.querySelector(
//           `tr:nth-of-type(${row + 3}) td:nth-of-type(${cell + 3}) div`
//         );
//         if (option2.position) {
//           if (option2.position.classList.contains("gold")) {
//             option2.position = null;
//           } else {
//             option2.eat.state = true;
//             option2.eat.pos = document.querySelector(
//               `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell + 2}) div`
//             );
//           }
//         }
//       }
//     }
//     //If the piece is crowned find possible options 3 and 4.
//     if (crowned) {
//       option3.position = document.querySelector(
//         `tr:nth-of-type(${row}) td:nth-of-type(${cell}) div`
//       );

//       option4.position = document.querySelector(
//         `tr:nth-of-type(${row}) td:nth-of-type(${cell + 2}) div`
//       );

//       if (option3.position) {
//         if (option3.position.classList.contains("gold")) {
//           option3.position = document.querySelector(
//             `tr:nth-of-type(${row - 1}) td:nth-of-type(${cell - 1}) div`
//           );
//           if (option3.position) {
//             if (option3.position.classList.contains("gold")) {
//               option3.position = null;
//             } else {
//               option3.position = document.querySelector(
//                 `tr:nth-of-type(${row - 1}) td:nth-of-type(${cell - 1}) div`
//               );
//               option3.eat.state = true;
//               option3.eat.pos = document.querySelector(
//                 `tr:nth-of-type(${row}) td:nth-of-type(${cell}) div`
//               );
//             }
//           }
//         }
//       }

//       if (option4.position) {
//         if (option4.position.classList.contains("gold")) {
//           option4.position = document.querySelector(
//             `tr:nth-of-type(${row - 1}) td:nth-of-type(${cell + 3}) div`
//           );
//           if (option4.position) {
//             if (option4.position.classList.contains("gold")) {
//               option4.position = null;
//             } else {
//               option4.eat.state = true;
//               option4.eat.pos = document.querySelector(
//                 `tr:nth-of-type(${row}) td:nth-of-type(${cell + 2}) div`
//               );
//             }
//           }
//         }
//       }
//     }
//   } else {
//     option1.position = document.querySelector(
//       `tr:nth-of-type(${row}) td:nth-of-type(${cell}) div`
//     );

//     option2.position = document.querySelector(
//       `tr:nth-of-type(${row}) td:nth-of-type(${cell + 2}) div`
//     );

//     if (option1.position) {
//       if (option1.position.classList.contains("red")) {
//         option1.position = document.querySelector(
//           `tr:nth-of-type(${row - 1}) td:nth-of-type(${cell - 1}) div`
//         );
//         if (option1.position) {
//           if (option1.position.classList.contains("red")) {
//             option1.position = null;
//           } else {
//             option1.eat.state = true;
//             option1.eat.pos = document.querySelector(
//               `tr:nth-of-type(${row}) td:nth-of-type(${cell}) div`
//             );
//           }
//         }
//       }
//     }

//     if (option2.position) {
//       if (option2.position.classList.contains("red")) {
//         option2.position = document.querySelector(
//           `tr:nth-of-type(${row - 1}) td:nth-of-type(${cell + 3}) div`
//         );
//         if (option2.position) {
//           if (option2.position.classList.contains("red")) {
//             option2.position = null;
//           } else {
//             option2.eat.state = true;
//             option2.eat.pos = document.querySelector(
//               `tr:nth-of-type(${row}) td:nth-of-type(${cell + 2}) div`
//             );
//           }
//         }
//       }
//     }

//     if (crowned) {
//       option3.position = document.querySelector(
//         `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell}) div`
//       );

//       option4.position = document.querySelector(
//         `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell + 2}) div`
//       );

//       if (option3.position) {
//         if (option3.position.classList.contains("red")) {
//           option3.position = document.querySelector(
//             `tr:nth-of-type(${row + 3}) td:nth-of-type(${cell - 1}) div`
//           );
//           if (option3.position) {
//             if (option3.position.classList.contains("red")) {
//               option3.position = null;
//             } else {
//               option3.eat.state = true;
//               option3.eat.pos = document.querySelector(
//                 `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell}) div`
//               );
//             }
//           }
//         }
//       }

//       if (option4.position) {
//         if (option4.position.classList.contains("red")) {
//           option4.position = document.querySelector(
//             `tr:nth-of-type(${row + 3}) td:nth-of-type(${cell + 3}) div`
//           );
//           if (option4.position) {
//             if (option4.position.classList.contains("red")) {
//               option4.position = null;
//             } else {
//               option4.eat.state = true;
//               option4.eat.pos = document.querySelector(
//                 `tr:nth-of-type(${row + 2}) td:nth-of-type(${cell + 2}) div`
//               );
//             }
//           }
//         }
//       }
//     }
//   }

//   return [option1, option2, option3, option4];
// };

// const changeTurn = color => {
//   reds = document.querySelectorAll(".red:not(.options)");

//   blacks = document.querySelectorAll(".gold:not(.options)");

//   //Remove or add the disabled class, depending on which color just played.
//   if (color === "red") {
//     for (red of reds) {
//       red.classList.add("disabled");
//       red.addEventListener("click", clicked);
//     }

//     for (gold of blacks) {
//       gold.classList.remove("disabled");
//       gold.addEventListener("click", clicked);
//     }
//   } else {
//     for (red of reds) {
//       red.classList.remove("disabled");
//     }

//     for (gold of blacks) {
//       gold.classList.add("disabled");
//     }
//   }
// };

// const crown = piece => {
//   piece.classList.add("crowned", "crowning");
//   document.documentElement.style.setProperty("--shake-anim", "0.2s shake");
//   setTimeout(() => {
//     document.documentElement.style.setProperty("--shake-anim", "none");
//     piece.classList.remove("crowning");
//   }, 1000);
// };

// for (red of reds) {
//   red.classList.add("red");
//   red.addEventListener("click", clicked);
// }

// for (gold of blacks) {
//   gold.classList.add("gold", "disabled");
//   gold.addEventListener("click", clicked);
// }









// for ( let i=0; i<checkerBoard[i].length; i++) {
//   if (checkerBoard[i] = 0){
//   for ( let j=0; j < checkerBoard[j].length; j++) {
//     $(".odd td")
// .filter(function(i){ return (i % 2 !== 0) })
// .addClass("gold");
//     }
//   }
 
// }
// $(".odd ")
// .filter(function(i){ return (i % 2 !== 0) })
// .addClass("gold");
// $(".odd td")
// .filter(function(i){ return (i % 2 !== 0) })
// .addClass("gold");
// $(".even td:even")
// .filter(function(i){ return (i % 2 !== 0) })
// .addClass("gold");

// $(checkerBoard).each( function() {
//   $(this).find("td").each( function() {
//     if (
//     $(this).hasClass("gold")) {
//      $(this).html("gold")
//     };
    
//   })
// })


// });


  



// // //Sets up the visual board on the button click.
// // $('#set-board').on('click', function() {
// //   setBoard();
// // });

// // //Clear board button clears board array and Virtual Board.
// // $('#clear-board').on('click', function() {
// //   clearBoard();
// // });
// window.onload = function () {
// let checkerBoard = [
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [2, 0, 2, 0, 2, 0, 2, 0],
//   [0, 2, 0, 2, 0, 2, 0, 2],
//   [2, 0, 2, 0, 2, 0, 2, 0]
// ];