class ShuffleBoardController{
    constructor(rows, cols) {
        this.row = rows
        this.col = cols
        this.board;
    }

    genratePieces(){
        var num = this.col*this.row;
        var b = [...Array(num-1).keys()].map(x=> new Piece([], x+1))
        b.push(null);
        return b
    }

    genrateUnShuffleBoard(){
        //TODO
        var n = this.genratePieces()
        var m = []
        var i =0;
        for(let x = 0; x<this.row; x++){
            var u = [];
            m.push(u);
            for (let y = 0; y<this.col; y++)
            {
                if (n[i]!= null)
                {
                    n[i].loc = [x,y];
                }
                u.push(n[i]);
                i++;
            }
        }
        this.board = new Board(m);
        return this.board
    }

    shuffle(){
        var shufleBoard = new BoardController(this.board);
        shufleBoard.shuffleBoardAction();
        return this.board;
    }
}