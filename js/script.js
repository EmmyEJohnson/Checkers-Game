//onclick events

//rules and directions button
$("#rulesDropBtn").on('click', function() {
  $(this).show();
  $(".dropDown-content").show();
  $(".pyrateHeader").hide();
});

$("#rulesImg").on('click', function() {
  $(this).show();
  $(".dropDown-content").hide();
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

//making the checkerboard
//td=individual data cell/square  tr=row




















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



// document.querySelector("#s-Button_2")//join/newsletter button
//   document.querySelector("#s-Rectangle_1")//whole newsletter drop-in
//     document.querySelector("#s-Input_1 > div.borderLayer > div > div > div > input[type=text]")//text-email-input for newsletter
//     document.querySelector("#s-Rectangle_2 > div.borderLayer > div > div")//subscribe button

// document.querySelector("#rtr-s-Button_1_0")//rules/directions button
//   document.querySelector("#s-Paragraph_3")//directions and rules paragraph

// document.querySelector("#s-Rectangle_1")//Ready to play button

// document.querySelector("#s-Button_4")//reset button

// document.querySelector("#s-Button_5")//exit game button



// //hidden elements on page load event

// document.querySelector("#s-Paragraph_3")//rules and directions hidden on pageload

// document.querySelector("#s-Rectangle_1")//subscribe to newsletter 

// document.querySelector("#s-Button_4")//reset gameboard button

// document.querySelector("#s-Button_5")//exit game button

// document.querySelector("#s-Image_1")//gameboard 

// document.querySelector("#s-Image_24")

