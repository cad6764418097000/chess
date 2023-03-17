// QOL Controls
const pieceSize = 63;


var boardDOM = $("#board");




//    movePiece(wKnight, 100, 100);



$('#board').click(function(e){


  const indexx = Math.ceil(e.offsetX / 62);
  const indexy = Math.ceil(e.offsetY / 62);

  board.highlightSquare(indexx, indexy, "#FFFF00");
});





Draggable.create(".piece", {
  type:"x,y",
  onDrag: function(event){
  },
  onDragEnd: function(event){
    console.log(this);

    const x = event.x;
    const y = event.y;
    const indexX = Math.floor((x + 62) / 62.5);
    const indexY = Math.floor((x + 62) / 62.5);
    index = board.pieceAt(indexX, indexY);
    //console.log(this.target);
    console.log(board.pieces[index]);

    board.pieces[index].movePiece(indexX, indexY);
    console.log(indexX + ", " + indexY);
  }
})
