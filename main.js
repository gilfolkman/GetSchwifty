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
let board = new Board(k,[2,2])
console.log(board)

function update()
{
    for (let x =0; x<board.board[0].length; x ++)
    {
    const div = p[x];
    for (let y = 0; y<div.children.length; y++)
    {
        const a = div.children[y];
        a.innerHTML = board.board[x][y]? board.board[x][y].data : "n" ;
    }
    }
    if (board.cheackForWin())
    {
        alert("finished game")
    }
}
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
for (let x =0; x<board.board[0].length; x ++)
{
    const div = document.createElement("div")
    p.push(div);
    for (let y = 0; y<board.board[0].length; y++)
    {
        const a = document.createElement("button");
        a.innerHTML = board.board[x][y]? board.board[x][y].data: "n" ;
        a.addEventListener("click", () => {
            board.canSwap([x,y]);
            update();})
        div.appendChild(a);
    }
    document.body.appendChild(div);
}
console.log(p);
console.log(board.cheackForWin());
console.log(board.swapOptions())