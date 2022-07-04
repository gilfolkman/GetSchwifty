class GenrateBoardViewer
{
    constructor(){}
    genrateBoard(board){
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
        var moves = document.createElement("label");
        moves.setAttribute("id", "moves");
        l.appendChild(moves);
        document.body.appendChild(l);
}}