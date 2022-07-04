var col = window. prompt("Enter size: ");
let b = new ShuffleBoard(col, col);
n = b.genratePieces();
console.log(n)
k = b.genrateUnShuffleBoard()
console.log(k)
var p = new Array();
s = b.shuffleBoardAction()


console.log("shuffle")
console.log(s)
let board = new Board(k)
console.log(board)
var t = new BoardViewer()
var m = new GenrateBoardViewer()
m.genrateBoard(board.board, handleClick);
z = new BoardController(board)

// function update()
// {
//     console.log(board)
//     const alldiv = document.getElementById("board");
//     for (let x =0; x<board.board[0].length; x ++)
//     {
//     const div = alldiv.children[x];
//     console.log(div.children.length)
//     for (let y = 0; y<div.children.length; y++)
//     {
//         const a = div.children[y];
//         console.log(a)
//         a.innerHTML = board.board[x][y]? board.board[x][y].data : "n" ;
//     }
//     }
//     if (board.cheackForWin())
//     {
//         alert("finished game")
//     }
// }
// board.board.forEach(element => {
//     const div = document.createElement("div")
//     p.push(div);
//     element.forEach(tile => {
//         console.log(tile);
//         const a = document.createElement("button");
//         a.innerHTML= tile.data;
//         div.appendChild(a);
//     }    )

// });
// var l = document.createElement("div");
// l.setAttribute("id", "board");

// for (let x =0; x<board.board[0].length; x ++)
// {
//     const div = document.createElement("div","divs")
//     p.push(div);
//     for (let y = 0; y<board.board[0].length; y++)
//     {
//         const a = document.createElement("button" , "piece");
//         a.innerHTML = board.board[x][y]? board.board[x][y].data: "n" ;
//         a.addEventListener("click", () => {
//             board.canSwap([x,y]);
//             t.update(board.board);})
//         div.appendChild(a);
//     }
//     l.appendChild(div);

// }
// document.body.appendChild(l);

function handleClick(x,y)
{
    z.canSwap([x,y])
    t.update(board.board);
    if (z.cheackForWin())
    {
        alert("won")
    }
}

console.log(p);
console.log(board.cheackForWin());
console.log(board.swapOptions())
