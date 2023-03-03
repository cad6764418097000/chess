// QOL Controls
const pieceSize = 63;

// Black Piece Assets stolen from chess.com
const bPawn = "https://www.chess.com/chess-themes/pieces/neo/150/bp.png";
const bBishop = "https://www.chess.com/chess-themes/pieces/neo/150/bb.png";
const bKing = "https://www.chess.com/chess-themes/pieces/neo/150/bk.png"
const bKnight = "https://www.chess.com/chess-themes/pieces/neo/150/bn.png";
const bQueen = "https://www.chess.com/chess-themes/pieces/neo/150/bq.png";
const bRook = "https://www.chess.com/chess-themes/pieces/neo/150/br.png";

// White Piece assets stolen from chess.com
const wPawn = "https://www.chess.com/chess-themes/pieces/neo/150/wp.png";
const wBishop = "https://www.chess.com/chess-themes/pieces/neo/150/wb.png";
const wKing = "https://www.chess.com/chess-themes/pieces/neo/150/wk.png"
const wKnight = "https://www.chess.com/chess-themes/pieces/neo/150/wn.png";
const wQueen = "https://www.chess.com/chess-themes/pieces/neo/150/wq.png";
const wRook = "https://www.chess.com/chess-themes/pieces/neo/150/wr.png";

// Board Assets
const board = "https://images.chesscomfiles.com/chess-themes/boards/green/150.png";



var Board = $("#board")



function movePiece(piece, x, y){
  let image = $('<svg><image x="' + x + '" y="'+y+'" width="63" height="63" xlink:href="'+ piece +'"> <image/></svg>');


}
movePiece(bKing, 100, 100);
