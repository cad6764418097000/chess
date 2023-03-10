// QOL Controls
const pieceSize = 63;


var boardDOM = $("#board")




//movePiece(wKnight, 100, 100);



$('#board').click(function(e){


  const indexx = Math.ceil(e.offsetX / 62);
  const indexy = Math.ceil(e.offsetY / 62);

  board.highlightSquare(indexx, indexy, "#FFFF00");
});
