class ShuffleBoard{
    constructor(rows, cols) {
        this.row = rows
        this.col = cols
        this.board ;
    }

    genratePieces(){
        var num = this.col*this.row;
        var b = [...Array(num-1).keys()].map(x=> new Piece([], x+1))
        b.push(null);
        return b
    }

    genrateUnShuffleBoard(){
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
        this.board = new Board (m, []);
        return m;
    }
    getRandom(options)
    {
        return options[Math.floor((Math.random()*options.length))];
    }

    shuffleBoardAction(){
        var history = []
        for (let i =0; i<20; i++)
        {
            var options = this.board.swapOptions();
            var y = this.getRandom(options)
            this.board.swapEmpty(y);
            console.log(options)
        }
        return this.board.board;
    }
}