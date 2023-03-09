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
const boardImage = "https://images.chesscomfiles.com/chess-themes/boards/green/150.png";




/*
Blank is 00, king is k, queen is q, rook is r, knight is n, bishop is b, pawn is p


-----------------
Starting Position
-----------------


br bk bb bk bq bb bn br
bp bp bp bp bp bp bp bp
00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00
00 00 00 00 00 00 00 00
wp wp wp wp wp wp wp wp
wr wn wb wk wq wb wn wr

brbkbbbkbqbbbnbrbpbpbpbpbpbpbpbp0000000000000000000000000000000000000000000000000000000000000000wpwpwpwpwpwpwpwpwrwnwbwkwqwbwnwr
128 character string
*/
function movePiece(piece, x, y){
  let image = $('<svg><image x="' + x + '" y="'+y+'" width="63" height="63" xlink:href="'+ piece +'"> <image/></svg>');
  $("#board").append(image);

}


class Piece{
  constructor(type, xindex = 0, yindex = 0, movement = []) {
    this.type = type;
    this.xindex = xindex;
    this.yindex = yindex;

    // Defines piece movement with indexing based on the board being a gride of indexes
    // [xmov, ymov]
    this.movement = movement;
  }

  move(piece, x, y){

  }

}

class Knight extends Piece{
  constructor() {
    const movement = [ [-1, -2], [1, -2], [-2, - 1], [2, -1], [-2, 1], [2, 1], [-1,2], [1,2] ];
    super("Knight", 0, 0, movement);


  }

}

class Board{

  constructor(initialid) {

    this.currentId = initialid;
    this.udateBoard(initialid);

  }

  udateBoard(){
    const setup = this.currentId.match(/.{1,2}/g) ?? []; // Splits string every 2 characters into an array
    var pieceLink = ""
    var xindex = 0;
    var yindex = 0;
    for(let i = 0; i < setup.length; i++){
      if (setup[i] == "00") {
        // The Slot is empty do nothing

      }else{

        pieceLink = "https://www.chess.com/chess-themes/pieces/neo/150/" + setup[i] + ".png";
        xindex = (i % 8) + 1;
        yindex = (Math.floor(i / 8)) + 1;
        console.log(pieceLink);
        console.log( "(" + xindex + ", " + yindex +")" );

        movePiece(pieceLink, 62.5 * xindex - 62, 62.5 * yindex - 62)

      }
    }
  }


}





var board = new Board("brbnbbbqbkbbbnbrbpbpbpbpbpbpbpbp0000000000000000000000000000000000000000wn0000000000000000000000wpwpwpwpwpwpwpwpwrwnwbwqwkwbwnwr");
var knight = new Knight();
console.log(knight);
