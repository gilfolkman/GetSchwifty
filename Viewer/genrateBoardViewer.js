class GenrateBoardViewer
{
    constructor(){}
    genrateBoard(board, action){
        var l = document.createElement("div");
        l.setAttribute("id", "board");

        for (let x =0; x<board[0].length; x ++)
        {
            const div = document.createElement("div")
            p.push(div);
            for (let y = 0; y<board[0].length; y++)
            {
                const a = document.createElement("button");
                a.setAttribute("id", "piece"+x+y);
                a.innerHTML = board[x][y]? board[x][y].data: "n" ;
                a.addEventListener("click", () => {
                    action(x,y);})
                div.appendChild(a);
            }
            l.appendChild(div);

        }
        document.body.appendChild(l);
}}