//onclick events

//sign up newsletter button
$("#newsDropBtn").on('click', function() {
  $(this).show();
  $("#signUp-content").show();
  $(".pyrateHeader").hide();
});

$("#newsImg").on('click', function() {
  $(this).show();
  $("#signUp-content").hide();
  $(".pyrateHeader").show();
});

//rules and directions button
$("#rulesDropBtn").on('click', function() {
  $(this).show();
  $("#rulesDirections-content").show();
  $(".pyrateHeader").hide();
});

$("#rulesImg").on('click', function() {
  $(this).show();
  $("#rulesDirections-content").hide();
  $(".pyrateHeader").show();
});

//ready to play button
$("#revealBoard").on('click', function() {
  $(this).hide();
  $(".landingPage").hide();
  $("#gameBoardPage").show();
  $(".exitGame").show();
});

//exit game button
$("#exitGame").on('click', function() {
  $(this).hide();
  $("#gameBoardPage").hide();
  $(".landingPage").show();
  $("#revealBoard").show();
});


//water movement

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

//checkerboard
let checkerboard = [
  null, 0, null, 1, null, 2, null, 3,
  4, null, 5, null, 6, null, 7, null,
  null, 8, null, 9, null, 10, null, 11,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  12, null, 13, null, 14, null, 15, null,
  null, 16, null, 17, null, 18, null, 19,
  20, null, 21, null, 22, null, 23, null 
]

//index.html
const squares = $("td");
let silverCoins = $(".silverCoin");
let goldCoins = $("span");
const silverTurnText = $(".silverTurnText");
const goldTurnText = $(".goldTurnText");
const divider = $("#divider");

//properties
let turn = true;
let silverScore = 12;
let goldScore = 12;
let userCoins;

//create an object
let chosenCoin = {
  coinId: -1,
  indexOfCoin: -1,
  isCaptain: false,
//movement on board back and forth
  sevenSq: false,
  nineSq: false,
  fourteenthSq: false,
  eighteenthSq: false,
  negSevenSq: false,
  negNineSq: false,
  negFourteenthSq: false,
  negEighteenthSq: false,
}

//event listeners on coins
function clickOnCoins() {
  if (turn) {
    for (let i = 0; i < silverCoins.length; i++) {
      silverCoins[i].on('click', getUserCoins);
    }
  } else {
     for (let i = 0; i < goldCoins.length; i++) {
      goldCoins[i].on('click', getUserCoins);
    }
  }
  console.log("work");
}




//function for length of the players coin count
function getUserCoins() {
  if (turn) {
    userCoins = silverCoins;
  } else {
    userCoins = goldCoins;
  }
  // removeSquareonclick();
  // resetBorders();
}































// let silverCoin = document.createElement("img");
// silverCoin.setAttribute("src", "https://i.postimg.cc/Bbb4MR3z/A17-F0-D58-1-C69-405-E-99-E3-91-B03-E8-E7957.png");
// silverCoin.setAttribute("height", "75px");
// silverCoin.setAttribute("width", "75");
// silverCoin.setAttribute("alt", "Silver");
// document.getElementById("silverCoins").appendChild(silverCoin);


// let goldCoin = document.createElement("img");
// goldCoin.setAttribute("src", "https://i.postimg.cc/1zvncv0L/DAC4-EE45-0-D2-C-4247-A3-DD-B481-E8-A99674.png");
// goldCoin.setAttribute("height", "75px");
// goldCoin.setAttribute("width", "75");
// goldCoin.setAttribute("alt", "Gold");
// document.getElementById("goldCoins").appendChild(goldCoin);



