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

//dropdowns for .email-list and .rules

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


// Click on the doubloon piece you would like to move
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

//Declaring global variables

//  let square = document.getElementsByClassName("square");
//  let whitedoubloon = document.getElementsByClassName("white-doubloon");
//  let blackdoubloon = document.getElementsByClassName("black-doubloon");
//  let board = document.getElementById("board");
//  let score = document.getElementById("score");
//  let blackBackground = document.getElementById("blackBackground");
 
//  let windowHeight = window.innerHeight
//  || document.documentElement.userHeight
//  || document.body.userHeight;  ;
//  let windowWidth =  window.innerWidth
//  || document.documentElement.userWidth
//  || document.body.userWidth;
//  let moveLength = 80 ;
//  let moveDeviation = 10;
//  let Dimension = 1;
//  let selectedPiece,selectedPieceindex;
//  let upRight,upLeft,downLeft,downRight;  //all possiblities
//  let contor = 0 , gameOver = 0;
//  let bigScreen = 1;
 
//  let block = [];
//  let Wdoubloon = [];
//  let Bdoubloon = [];
//  let thedoubloon ;
//  let oneMove;
//  let anotherMove;
//  let mustMakeMove = false;
//  let multiplier = 1 //if user makes only 1 jump
 
//  let boardLimit,reverseBoardLimit ,  moveUpLeft,moveUpRight, moveDownLeft,moveDownRight , boardLimitLeft, boardLimitRight;
 

//    getDimension ();
//    if ( windowWidth > 640 ) {
//      moveLength = 80;
//      moveDeviation = 10;
//    }
//    else {
//      moveLength = 50;
//      moveDeviation = 6;
//    }
 
// //class declaration
 
//  let squareP = function ( square, index ) {
//    this.id = square;
//    this.ocupied = false;
//    this.pieceId = undefined;
//    this.id.onclick = function() {
//      makeMove(index);
//    }
//  }
 
//  let doubloon = function ( piece, color, square ) {
//    this.id = piece;
//    this.color = color;
//    this.king = false;
//    this.ocupiedSquare = square;
//    this.alive = true;
//    this.move = false;
//    if ( square%8 ) {
//      this.coordX= square%8;
//      this.coordY = Math.floor(square/8) + 1 ;
//    }
//    else {
//      this.coordX = 8;
//      this.coordY = square/8 ;
//    }
//    this.id.onclick = function () {
//      showMoves(piece);
//    }
//  }
 
//  doubloon.prototype.setCoord = function ( X, Y ) {
//    let x = ( this.coordX - 1  ) * moveLength + moveDeviation;
//    let y = ( this.coordY - 1 ) * moveLength  + moveDeviation;
//    this.id.style.top = y + 'px';
//    this.id.style.left = x + 'px';
//  }
 
//  doubloon.prototype.changeCoord = function(X,Y){
//    this.coordY +=Y;
//    this.coordX += X;
//  }
 
//  doubloon.prototype.checkIfKing = function () {
//    if ( this.coordY == 8 && !this.king && this.color == "white" ) {
//      this.king = true;
//      this.id.style.border = "4px solid #FFFF00";
//    }
//    if ( this.coordY == 1 && !this.king && this.color == "black" ) {
//      this.king = true;
//      this.id.style.border = "4px solid #FFFF00";
//    }
//  }
 
 
 
//  for ( let i = 1; i <=64; i++ )
//    block[i] =new squareP ( squares[i], i );
 

 
//    //white doubloons
//  for ( let i = 1; i <= 4; i++ ) {
//    Wdoubloon[i] = new doubloon ( whitedoubloon[i], "white", 2*i -1 );
//    Wdoubloon[i].setCoord(0,0);
//    block[ 2*i - 1 ].ocupied = true;
//    block[ 2*i - 1 ].pieceId =Wdoubloon[i];
//  }
 
//  for ( let i = 5; i <= 8; i++ ) {
//    Wdoubloon[i] = new doubloon(whitedoubloon[i], "white", 2*i );
//    Wdoubloon[i].setCoord(0,0);
//    block[2*i].ocupied = true;
//    block[2*i].pieceId = Wdoubloon[i];
//  }
 
//  for ( let i = 9; i <= 12; i++ ) {
//    Wdoubloon[i] = new doubloon ( whitedoubloon[i], "white", 2*i - 1 );
//    Wdoubloon[i].setCoord(0,0);
//    block[ 2*i - 1 ].ocupied = true;
//    block[ 2*i - 1 ].pieceId = Wdoubloon[i];
//  }
 
//  //black doubloons
//  for ( let i = 1; i <= 4; i++ ) {
//    Bdoubloon[i] = new doubloon(blackdoubloon[i], "black", 56 + 2*i  );
//    Bdoubloon[i].setCoord(0,0);
//    block[56 +  2*i ].ocupied = true;
//    block[56+  2*i ].pieceId =Bdoubloon[i];
//  }
 
//  for ( let i = 5; i <= 8; i++ ) {
//    Bdoubloon[i] = new doubloon( blackdoubloon[i], "black", 40 +  2*i - 1 );
//    Bdoubloon[i].setCoord ( 0,0 );
//    block[ 40 + 2*i - 1].ocupied = true;
//    block[ 40 + 2*i - 1].pieceId = Bdoubloon[i];
//  }
 
//  for (let i = 9; i <= 12; i++){
//    Bdoubloon[i] = new doubloon ( blackdoubloon[i], "black", 24 + 2*i  );
//    Bdoubloon[i].setCoord ( 0, 0 );
//    block[ 24 + 2*i ].ocupied = true;
//    block[ 24 + 2*i ].pieceId = Bdoubloon[i];
//  }
 
 
//  thedoubloon = Wdoubloon;
 
//  function showMoves ( piece ) {
 
 
//    let match = false;
//    mustMakeMove = false;
//    if ( selectedPiece ) {
//        resets ( selectedPiece );
//    }
//    selectedPiece = piece;
//    let i,j; //index
//    for ( j = 1; j <= 12; j++ ){
//      if ( thedoubloon[j].id == piece ) {
//        i = j;
//        selectedPieceindex = j;
//        match = true;
//      }
//    }
 
//    if ( oneMove && !moveMoves ( oneMove )) {
//      changeTurns ( oneMove );
//      oneMove = undefined;
//      return false;
//    }
//    if ( oneMove && oneMove != thedoubloon[i] ) {
//      return false;
//    }
 
//    if ( !match ) {
//     return 0 ; //if no match found
//    }
 
//  //color check
//    if ( thedoubloon[i].color =="white" ) {
//      boardLimit = 8;
//      boardLimitRight = 1;
//      boardLimitLeft = 8;
//      moveUpRight = 7;
//      moveUpLeft = 9;
//      moveDownRight = - 9;
//      moveDownLeft = -7;
//    }
//    else {
//      boardLimit = 1;
//      boardLimitRight = 8;
//      boardLimitLeft = 1;
//      moveUpRight = -7;
//      moveUpLeft = -9;
//      moveDownRight = 9;
//      moveDownLeft = 7;
//    }
//     //check to go
 
 
//      moveMoves ( thedoubloon[i] ); //checking jumps
 
 
//    //check to go
 
//     if ( !mustMakeMove ) {
//       downLeft = checkMove ( thedoubloon[i] , boardLimit , boardLimitRight , moveUpRight , downLeft );
//      downRight = checkMove ( thedoubloon[i] , boardLimit , boardLimitLeft , moveUpLeft , downRight );
//      if ( thedoubloon[i].king ) {
//        upLeft = checkMove ( thedoubloon[i] , reverseBoardLimit , boardLimitRight , moveDownRight , upLeft );
//        upRight = checkMove ( thedoubloon[i], reverseBoardLimit , boardLimitLeft , moveDownLeft, upRight )
//      }
//    }

//    if ( downLeft || downRight || upLeft || upRight ) {
//        return true;
//      }
//    return false;
 
//  }
 
 
//  function resets ( piece ) {
//    if ( downRight ) block[downRight].id.style.background = "#BA7A3A";
//    if ( downLeft ) block[downLeft].id.style.background = "#BA7A3A";
//    if (upRight) block[upRight].id.style.background = "#BA7A3A";
//    if (upLeft) block[upLeft].id.style.background = "#BA7A3A";
//  }
 
//  //moving pieces
 
//  function makeMove (index) {
//    let isMove = false;
//    if ( !selectedPiece ) 
//      return false;
//    if ( index != upLeft && index != upRight && index != downLeft && index != downRight) {
//      resets(0);
//      selectedPiece = undefined;
//      return false;
//    }
 
//   //how many rows get jumped

//    if ( thedoubloon[1].color=="white" ) {
//      cpyDownRight = upRight;
//      cpyDownLeft = upLeft;
//      cpyUpLeft = downLeft;
//      cpyUpRight = downRight;
//    }
//    else {
//      cpyDownRight = upLeft;
//      cpyDownLeft = upRight;
//      cpyUpLeft = downRight;
//      cpyUpRight = downLeft;
//    }
 
//    if (mustMakeMove)  // how many rows get jumped
//      multiplier = 2;
//    else
//      multiplier = 1;
 
 
//      if ( index == cpyUpRight) {
//        isMove = true;
//        if(thedoubloon[1].color=="white"){
//          // null piece

//          executeMove (multiplier * 1, multiplier * 1, multiplier * 9);

//          //removing jumped doubloon

//          if (mustMakeMove) eliminateCheck(index - 9);
//        }
//        else{
//          executeMove( multiplier * 1, multiplier * -1, multiplier * -7);
//          if(mustMakeMove) eliminateCheck( index + 7 );
//        }
//      }
 
//      if (index == cpyUpLeft) {
 
//        isMove = true;
//        if(thedoubloon[1].color=="white"){
//          executeMove( multiplier * -1, multiplier * 1, multiplier * 7);
//           if(mustMakeMove)	eliminateCheck(index - 7 );
//        }
//        else{
//          executeMove( multiplier * -1, multiplier * -1, multiplier * -9);
//          if (mustMakeMove) eliminateCheck( index + 9 );
//        }
//      }
 
//      if(thedoubloon[selectedPieceindex].king){
 
//        if(index == cpyDownRight){
//          isMove = true;
//          if(thedoubloon[1].color=="white"){
//            executeMove( multiplier * 1, multiplier * -1, multiplier * -7);
//            if(mustMakeMove) eliminateCheck ( index  + 7) ;
//          }
//          else{
//            executeMove( multiplier * 1, multiplier * 1, multiplier * 9);
//            if(mustMakeMove) eliminateCheck ( index  - 9) ;
//          }
//        }
 
//      if(index == cpyDownLeft){
//        isMove = true;
//          if(thedoubloon[1].color=="white"){
//            executeMove( multiplier * -1, multiplier * -1, multiplier * -9);
//            if(mustMakeMove) eliminateCheck ( index  + 9) ;
//          }
//          else{
//            executeMove( multiplier * -1, multiplier * 1, multiplier * 7);
//            if(mustMakeMove) eliminateCheck ( index  - 7) ;
//          }
//        }
//      }
 
//    resets(0);
//    thedoubloon[selectedPieceindex].checkIfKing();
 
//    // turn change
//    if (isMove) {
//        anotherMove = undefined;
//       if(mustMakeMove) {
//           anotherMove = moveMoves(thedoubloon[selectedPieceindex]);
//       }
//      if (anotherMove){
//        oneMove = thedoubloon[selectedPieceindex];
//        showMoves(oneMove);
//      }
//      else{
//        oneMove = undefined;
//         changeTurns(thedoubloon[1]);
//         gameOver = checkIfLost();
//         if(gameOver) { setTimeout( declareWinner(),3000 ); return false};
//         gameOver = checkForMoves();
//         if(gameOver) { setTimeout( declareWinner() ,3000) ; return false};
//      }
//    }
//  }
 
//  //Moving Coordinates
 
//  function executeMove (X,Y,nSquare){
//    //exchanging the coordinates
//    thedoubloon[selectedPieceindex].changeCoord(X,Y);
//    thedoubloon[selectedPieceindex].setCoord(0,0);
//    //letting go of the doubloon and occupy the next spot
//    block[thedoubloon[selectedPieceindex].ocupiedSquare].ocupied = false;
//    //alert (thedoubloon[selectedPieceindex].ocupiedSquare);
//    block[thedoubloon[selectedPieceindex].ocupiedSquare + nSquare].ocupied = true;
//    block[thedoubloon[selectedPieceindex].ocupiedSquare + nSquare].pieceId = 	block[thedoubloon[selectedPieceindex].ocupiedSquare ].pieceId;
//    block[thedoubloon[selectedPieceindex].ocupiedSquare ].pieceId = undefined;
//    thedoubloon[selectedPieceindex].ocupiedSquare += nSquare;
 
//  }
 
//  function checkMove ( Apiece, tLimit, tLimitSide, moveDirection, theDirection) {
//    if ( Apiece.coordY != tLimit ) {
//      if ( Apiece.coordX != tLimitSide && !block [ Apiece.ocupiedSquare + moveDirection ].ocupied) {
//        block [ Apiece.ocupiedSquare + moveDirection ].id.style.background = "#704923";
//        theDirection = Apiece.ocupiedSquare + moveDirection;
//      }
//    else
//        theDirection = undefined;
//    }
//    else
//      theDirection = undefined;
//    return theDirection;
//  }
 
 
 
//  function  checkmove( check , X, Y , negX , negY, squareMove, direction){
//    if(check.coordX * negX >= 	X * negX && check.coordY *negY <= Y * negY && block[check.ocupiedSquare + squareMove ].ocupied && block[check.ocupiedSquare + squareMove].pieceId.color != check.color && !block[check.ocupiedSquare + squareMove * 2 ].ocupied){
//      mustMakeMove = true;
//      direction = check.ocupiedSquare +  squareMove*2 ;
//      block[direction].id.style.background = "#704923";
//      return direction ;
//    }
//    else
//      direction =  undefined;
//      return direction;
//  }
 
//  function eliminateCheck(indexX){
//    if(indexX < 1 || indexX > 64)
//      return  0;
 
//    let x =block[ indexX ].pieceId ;
//    x.alive =false;
//    block[ indexX ].ocupied = false;
//    x.id.style.display  = "none";
//  }
 
 
//  function moveMoves(ckc){
 
//       upRight = undefined;
//       upLeft = undefined;
//       downRight = undefined;
//       downLeft = undefined;
 
//     if(ckc.king ){
//       if(ckc.color == "white"){
//        upRight = checkmove( ckc , 6, 3 , -1 , -1 , -7, upRight );
//        upLeft = checkmove( ckc, 3 , 3 , 1 , -1 , -9 , upLeft );
//      }
//      else{
//         downLeft = checkmove( ckc , 3, 6, 1 , 1 , 7 , downLeft );
//        downRight = checkmove( ckc , 6 , 6 , -1, 1 ,9 , downRight );
//      }
//    }
//    if(ckc.color == "white"){
//       downLeft = checkmove( ckc , 3, 6, 1 , 1 , 7 , downLeft );
//      downRight = checkmove( ckc , 6 , 6 , -1, 1 ,9 , downRight );
//    }
//    else{
//      upRight = checkmove( ckc , 6, 3 , -1 , -1 , -7, upRight );
//      upLeft = checkmove( ckc, 3 , 3 , 1 , -1 , -9 , upLeft );
//    }
 
//     if(ckc.color== "black" && (upRight || upLeft || downLeft || downRight ) ) {
//       let p = upLeft;
//       upLeft = downLeft;
//       downLeft = p;
 
//       p = upRight;
//       upRight = downRight;
//       downRight = p;
 
//       p = downLeft ;
//       downLeft = downRight;
//       downRight = p;
 
//       p = upRight ;
//       upRight = upLeft;
//       upLeft = p;
//     }
//     if(upLeft != undefined || upRight != undefined || downRight != undefined || downLeft != undefined){
//       return true;
 
//     }
//     return false;
//  }
 
//  function changeTurns(ckc){
//      if(ckc.color=="white")
//    thedoubloon = Bdoubloon;
//  else
//    thedoubloon = Wdoubloon;
//   }
 
//  function checkIfLost(){
//    let i;
//    for(i = 1 ; i <= 12; i++)
//      if(thedoubloon[i].alive)
//        return false;
//    return true;
//  }
 
//  function  checkForMoves(){
//    let i ;
//    for(i = 1 ; i <= 12; i++)
//      if(thedoubloon[i].alive && showMoves(thedoubloon[i].id)){
//        erase-roads(0);
//        return false;
//      }
//    return true;
//  }
 
//  function declareWinner(){
//    black-background.style.display = "inline";
//    score.style.display = "block";
 
//  if(thedoubloon[1].color == "white")
//    score.innerHTML = "Black wins";
//  else
//    score.innerHTML = "Red wins";
//  }
 
 
 
//  function getDimension (){
//    contor ++;
//   windowHeight = window.innerHeight
//    || document.documentElement.userHeight
//    || document.body.userHeight;  ;
//   windowWidth =  window.innerWidth
//    || document.documentElement.userWidth
//    || document.body.userWidth;
//  }
 
//  document.getElementsByTagName("BODY")[0].onresize = function() {
 
//    getDimension();
//    let cpyBigScreen = bigScreen ;
 
//  if ( windowWidth < 650 ) {
//      moveLength = 50;
//      moveDeviation = 6;
//      if ( bigScreen == 1 ) bigScreen = -1;
//    }
//  if ( windowWidth > 650 ) {
//      moveLength = 80;
//      moveDeviation = 10;
//      if ( bigScreen == -1 ) bigScreen = 1;
//    }
//    if ( bigScreen != cpyBigScreen ) {
//    for ( let i = 1; i <= 12; i++ ) {
//      Bdoubloon[i].setCoord(0,0);
//      Wdoubloon[i].setCoord(0,0);
//    }
//    }
//  }
 
 
