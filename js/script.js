//landing page

//background



//will implement later

// let h = $('.flag').width();
// for(let i = 0; i < h; i++){
//     let flagElement = $("<div class='flag-element'>");
//     flagElement.css('background-position', -i + "px 0");
//     flagElement.css('-webkit-animation-delay', i * 2 + 'ms');
//     flagElement.css('-moz-animation-delay', i * 2 + 'ms');
//     flagElement.css('-ms-animation-delay', i * 2 + 'ms');
//     flagElement.css('animation-delay', i * 2 + 'ms');
//     $('.flag').append(flagElement);
// }

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

let units = new Array(8); // for board array
let gold = true;
let row = document.querySelectorAll("tr");
for (let i = 0; i < 8; i++) {
  let rc = row[i].children;
  units[i] = rc;
}
let rows;
let columns;
let currentChecker;

function Checker(player, rowIndex, colIndex, isCaptain) {
  this.player = player;
  this.rowIndex = rowIndex;
  this.colIndex = colIndex;
  this.isCaptain = isCaptain;
}

let checkers = new Array();

function initCheckers() {
  let checker;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        if (i < 3) {
          checker = new Checker("silver", i, j, false);
          checkers.push(checker);
        }
        if (i > 4) {
          checker = new Checker("gold", i, j, false);
          checkers.push(checker);
        }
      }
    }
  }
}
initCheckers();

function findcolrow(e) {
  rows = e.target.parentElement.parentElement.rowIndex;
  columns = e.target.parentElement.cellIndex;
  currentChecker = units[rows][columns];
  return rows + "" + columns;
}

function makeMoves(e) {
  let rowIndex = e.target.parentElement.rowIndex;
  let columnIndex = e.target.cellIndex;
  let currentSquare = units[rowIndex][columnIndex];
  let canMakeMoves = currentSquare.firstElementChild.className == "blank";
  let opex =
    units[(rows + rowIndex) / 2][(columns + columnIndex) / 2].firstElementChild
      .className != currentChecker.firstElementChild.className &&
    units[(rows + rowIndex) / 2][(columns + columnIndex) / 2].firstElementChild.className != "blank";
  if (canMakeMoves && opex) {
    if (currentChecker.firstElementChild.className == "silver-checker" && !gold) {
      if (
        rows == rowIndex - 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
        turn();
      }
    }

    if (
      currentChecker.firstElementChild.className == "gold-checker" &&
      gold
    ) {
      if (
        rows == rowIndex + 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
      }
      turn();
    }
  }

  if (canMakeMoves && opex) {
    if (currentChecker.firstElementChild.className == "silver-Captain" && !gold) {
      if (
        rows == rowIndex - 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
        turn();
      }
      if (
        rows == rowIndex + 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
        turn();
      }
    }
  }
  if (canMakeMoves && opex) {
    if (currentChecker.firstElementChild.className == "gold-Captain" && gold) {
      if (
        rows == rowIndex - 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
        turn();
      }
      if (
        rows == rowIndex + 2 &&
        (columns == columnIndex - 2 || columns == columnIndex + 2)
      ) {
        currentSquare.firstElementChild.className =
          currentChecker.firstElementChild.className;
        currentChecker.firstElementChild.className = "blank";
        //get rid of opponent checker
        units[(rows + rowIndex) / 2][
          (columns + columnIndex) / 2
        ].firstElementChild.className = "blank";
        turn();
      }
    }
  }
  Captain();
  return canMakeMoves;
}

function decide() {
  if (move()) {
    move();
  }
  if (MakeMoves()) {
    MakeMoves();
  }
}

function move(e) {
  let rowIndex = e.target.parentElement.rowIndex;
  let columnIndex = e.target.cellIndex;
  let currentSquare = units[rowIndex][columnIndex];
  let emptySquare = currentSquare.firstElementChild.className == "blank";
  let checkerClassName = currentChecker.firstElementChild.className;
  if (emptySquare) {
    let canMove = false;
    if (gold) {
      if (checkerClassName == "gold-checker") {
        canMove =
          rows == rowIndex + 1 &&
          (columns == columnIndex - 1 || columns == columnIndex + 1);
      } else if (checkerClassName == "gold-Captain") {
        canMove =
          (rows == rowIndex - 1 || rows == rowIndex + 1) &&
          (columns == columnIndex - 1 || columns == columnIndex + 1);
      }
    } else {
      if (checkerClassName == "silver-checker") {
        canMove =
          rows == rowIndex - 1 &&
          (columns == columnIndex - 1 || columns == columnIndex + 1);
      } else if (checkerClassName == "silver-Captain") {
        canMove =
          (rows == rowIndex - 1 || rows == rowIndex + 1) &&
          (columns == columnIndex - 1 || columns == columnIndex + 1);
      }
    }
    
    if (canMove) {
        currentSquare.firstElementChild.className = checkerClassName;
        currentChecker.firstElementChild.className = "blank";
        let squareId = currentChecker.id;
        let squareRow = parseInt(squareId[1]) - 1;
        let squareCol = parseInt(squareId[2]) - 1;
        let checkerColor;
        if (checkerClassName.includes("silver")) {
            checkerColor = "silver";
            }
        else if (checkerClassName.includes("gold")) {
           checkerColor = "gold";
        }
        let checker = getChecker(squareRow, squareCol, checkerColor);
        checker.rowIndex = currentSquare.parentElement.rowIndex;
        checker.colIndex = currentSquare.cellIndex;
      console.log(checkers);
        // update related object
        turn();
      }
  }
  Captain();
  return canMove;
}

function getChecker(row, col, color) {
  if (color == "silver") {
  return checkers[Math.floor(((8*row) + col)/2)];
  }
  else if (color == "gold") {
  return checkers[Math.floor((((8*row) -16) + col)/2)];
  }
}

function turn() {
  if (gold == true) {
    gold = false;
  } else {
    gold = true;
  }
} //keeps track of turns

function highlight(row, col) {
  units[row][col].style.backgroundColor = "blue";
}
function unhighlight(row, col) {
  units[row][col].style.backgroundColor = "gold";
}

function possibilities() {
  findcolrow();
  if (!gold) {
    if (currentChecker.firstElementChild.className == "silver-checker") {
      if (rows <= 7 && columns <= 7) {
        if (
          rows + 1 < 7 &&
          rows + 1 >= 0 &&
          columns + 1 <= 7 &&
          columns + 1 >= 0 &&
          units[rows + 1][columns + 1].firstElementChild.className == "blank"
        ) {
          highlight(rows + 1, columns + 1); //change color of box back to gold
          //it's possible
          setTimeout(() => {
            unhighlight(rows + 1, columns + 1);
          }, 500);
        }
        if (
          rows + 1 < 7 &&
          rows + 1 >= 0 &&
          columns - 1 <= 7 &&
          columns - 1 >= 0 &&
          units[rows + 1][columns - 1].firstElementChild.className == "blank"
        ) {
          highlight(rows + 1, columns - 1);
          //it's possible
          setTimeout(() => {
            unhighlight(rows + 1, columns - 1);
          }, 500);
        }
      }
    }
  }
  if (gold) {
    if (currentChecker.firstElementChild.className == "gold-checker") {
      if (rows <= 7 && columns <= 7) {

        if (
          rows - 1 < 7 &&
          rows - 1 >= 0 &&
          columns + 1 <= 7 &&
          columns + 1 >= 0 &&
          units[rows - 1][columns + 1].firstElementChild.className == "blank"
        ) {
          console.log("highlight is worCaptain");
          highlight(rows - 1, columns + 1);
          //it's possible
          setTimeout(() => {
            unhighlight(rows - 1, columns + 1);
          }, 500);
        }
        if (
          rows - 1 < 7 &&
          rows - 1 >= 0 &&
          columns - 1 <= 7 &&
          columns - 1 >= 0 &&
          units[rows - 1][columns - 1].firstElementChild.className == "blank"
        ) {
          highlight(rows - 1, columns - 1);
          //it's possible
          setTimeout(() => {
            unhighlight(rows - 1, columns - 1);
          }, 500);
        }
      }
    }
  }
  //move or MakeMoves
}

function Captain(e) {
  let rowIndex = e.target.parentElement.rowIndex;
  let x = currentChecker.parentElement.rowIndex;

  if (
    currentChecker.firstElementChild.className == "gold-checker" &&
    x == 0 //current square's rows, not rows of current checker
  ) {
    currentChecker.firstElementChild.className = "gold-Captain";
  }
  if (currentChecker.firstElementChild.className == "silver-checker" && x == 7) {
    currentChecker.firstElementChild.className = "silver-Captain";
  }
  // give instructions on how to Captain
}
