class GenrateBoardViewer
{
    constructor(){}
    genrateBoard(board, action){
        console.log(board)
        var l = document.createElement("div");
        l.setAttribute("id", "board");

        for (let x =0; x<board.length; x ++)
        {
            const div = document.createElement("div")
            for (let y = 0; y<board.length; y++)
            {
                const a = document.createElement("button");
                a.setAttribute("id", "piece"+x+y);
                a.innerHTML = board[x][y]? board[x][y].data: "n" ;
                div.appendChild(a);
            }
            l.appendChild(div);

        }
        document.body.appendChild(l);
}}