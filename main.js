


const viewers = {
    boardViewer : new BoardViewer(),
    genrateBoardViewer : new GenrateBoardViewer(),
    startGame : new StartGame(),
    victoryViewer : new VictoryViewer()
}

controller = new GameController (viewers)
start = new StartGame();
b = new BoardViewer();
controller.menu();
// var col = window. prompt("Enter size: ");
// var h = new ShuffleBoardController(col, col);
// k = h.genrateUnShuffleBoard();
// console.log("shuffle")
// z = new BoardController(h.board)
// let board = z.shuffleBoardAction();
// var t = new BoardViewer()
// var m = new GenrateBoardViewer()
// m.genrateBoard(board.board, handleClick);

// function handleClick(x,y)
// {
//     z.canSwap([x,y])
//     t.update(board.board);
//     if (z.cheackForWin())
//     {
//         alert("won")
//     }
// }

// console.log(board.swapOptions())
