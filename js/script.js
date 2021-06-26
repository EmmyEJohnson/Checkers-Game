var h = $('.flag').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 2 + 'ms');
    flagElement.css('-moz-animation-delay', i * 2 + 'ms');
    flagElement.css('-ms-animation-delay', i * 2 + 'ms');
    flagElement.css('animation-delay', i * 2 + 'ms');
    $('.flag').append(flagElement);
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