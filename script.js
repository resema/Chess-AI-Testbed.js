/*
 * From a tutorial found on freeCodeCamp
 */

var board, game = new Chess();

//
// The AI part starts here

//
// Board visualization and games state handling
var onDragStart = function(source, piece, position, orientation) {
    if (game.in_checkmate() === true || game.in_draw() === true || piece.search(/^b/) !== -1) {
        return false;
    }
}

var onDrop = function(source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    removeGreySquares();
    if (move === null) {
        return 'snapback';
    }

    renderMoveHistory(game.history());

}

var cfg = {
    pieceTheme: 'lib/chessboardjs/img/chesspieces/wikipedia/{piece}.png',
    draggable: true,
    dropOfBoard: 'snapback',
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop
};

board = ChessBoard('board', cfg);
