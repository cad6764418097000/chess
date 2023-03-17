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
function movePiece(piece, x, y, id){
  let image = $('<svg><image id="' + id +'" class="piece" x="' + x + '" y="'+y+'" width="63" height="63" xlink:href="'+ piece +'"> <image/></svg>');
  $("#container").append(image);

}


class Piece{
  constructor(type, color, num, xindex = 0, yindex = 0, movement = []) {

    //Initialize Piece
    const pieceId =  color.charAt(0) + type.charAt(0) + num;
    const pieceLink = "https://www.chess.com/chess-themes/pieces/neo/150/" + pieceId.substr(0, 2) + ".png";
    const image = $('<svg><image id="' + pieceId +'" class="piece" x="' + xindex + '" y="'+yindex+'" width="63" height="63" xlink:href="'+ pieceLink +'"> <image/></svg>');
    $("#container").append(image);


    this.type = type;
    this.xindex = xindex;
    this.yindex = yindex;
    this.svg = image;


    // Defines piece movement with indexing based on the board being a gride of indexes
    // [xmov, ymov]
    this.movement = movement;
  }

  move(xIndex, yIndex){
    this.xindex = xIndex;
    this.yindex = yIndex;

    this.svg.attr('x', String(62.5 * xIndex - 62));
    this.svg.attr('y', String(62.5 * yIndex - 62));

  }

}

class Knight extends Piece{
  constructor(color, num) {
    const movement = [ [-1, -2], [1, -2], [-2, - 1], [2, -1], [-2, 1], [2, 1], [-1,2], [1,2] ];


    super("knight", color, num, 0, 0, movement);


  }

}

class Bishop extends Piece{
  constructor(color, num) {
    var movement = [ ];
    for (var i = 1; i < 9; i++) {
      movement.push([i,i]);
      movement.push([-i,-i]);
      movement.push([-i,i]);
      movement.push([i,-i]);
    }

    super("bishop",color, num, 0, 0, movement);


  }

}


class Rook extends Piece{
  constructor(color, num) {

    var movement = [  ];

    for (var i = 1; i < 9; i++) {
      movement.push([0,i]);
      movement.push([0,-i]);
      movement.push([i,0]);
      movement.push([-i,0]);
    }
    super("rook",color, num, 0, 0, movement);


  }

}


class King extends Piece{
  constructor(color, num) {

    var movement = [ [-1, 0], [1, 0], [0, 1], [0, -1], [-1, -1], [1, 1], [-1,1], [1, -1] ];


    super("king",color, num, 0, 0, movement);
  }

}


class Queen extends Piece{
  constructor(color, num) {

    var movement = [  ];

    for (var i = 1; i < 9; i++) {
      movement.push([i,i]);
      movement.push([-i,-i]);
      movement.push([-i,i]);
      movement.push([i,-i]);
    }

    for (var i = 1; i < 9; i++) {
      movement.push([0,i]);
      movement.push([0,-i]);
      movement.push([i,0]);
      movement.push([-i,0]);
    }

    super("queen", color, num, 0, 0, movement);
  }

}





class Board{

  constructor(initialid) {

    this.pieces = []; // array of pieces on the board
    this.currentId = initialid;
    this.initializeBoard(initialid);
    this.highlightIndex = []; // First Number is x second number is y
  }

  initializeBoard(){

    const setup = this.currentId.match(/.{1,2}/g) ?? []; // Splits string every 2 characters into an array

    var pieceLink = "";
    var xindex = 0;
    var yindex = 0;

    for(let i = 0; i < setup.length; i++){
      if (setup[i] == "00") {
        // The Slot is empty do nothing

      }else{

        var piece = null;
        const color = setup[i].charAt(0);

        switch (setup[i].charAt(1)) {
          case "k": piece = new King(color, 1);
            break;
          case "q": piece = new Queen(color, 1);
            break;
          case "r": piece = new Rook(color, 1);
            break;
          case "b": piece = new Bishop(color, 1);
            break;
          case "n": piece = new Knight(color, 1);
            break;
            break;
          case "p": piece = new Knight(color, 1);
            break;


          default: console.log("Board Id Uncompatible");

        }

        xindex = (i % 8) + 1;
        yindex = (Math.floor(i / 8)) + 1;
        piece.move(xindex, yindex);
        //console.log(piece);
        this.pieces.push(piece);


      }
    }


    // check the piece array
    console.log(this.pieces);



  }


  highlightSquare(indexX, indexY, color){
    $('#highlight').remove()
    $("#board").append('<svg id="highlight"><rect x="'+ (indexX - 1) * 62.5+'" y="'+ (indexY - 1) * 62.5+'" width="63" height="63" style="fill:'+color+'; stroke-width:5;opacity:0.4" /></svg>');
    this.highlightIndex = [indexX, indexY];
    console.log(this.highlightIndex);
  }



  pieceAt(xIndex, yIndex){
    // Takes index values and returns the pieces at that particular index
    for (var i = 0; i < this.pieces.length; i++) {
      if (this.pieces.xindex === xIndex && this.index.y === indexY) {
        return i;
      }
    }
  }







}





var board = new Board("brbnbbbqbkbbbnbrbpbpbpbpbpbpbpbp0000000000000000000000000000000000000000wn0000000000000000000000wpwpwpwpwpwpwpwpwrwnwbwqwkwbwnwr");
board.highlightSquare(5,1, "#FFFF00");
var knight = new Knight("b", 1);
