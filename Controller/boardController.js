class BoardController {
    constructor(boardModel) {
        this.boardModel = boardModel
    }

    
    getBlankSpace() {
        console.log(this.boardModel );
        for (let x =0; x<this.boardModel.getCol(); x ++)
        {
            for (let y = 0; y<this.boardModel.getRow(); y++)
            {
                console.log(this.boardModel.getPiece(x,y));
                if (this.boardModel.getPiece(x,y) == null)
                {
                    return [x,y];
                }
            }
        }
    }

    cheackForWin() {
        for (let x =0; x<this.boardModel.getCol(); x ++)
        {
            for (let y = 0; y<this.boardModel.getRow(); y++)
            {
                if (this.boardModel.getPiece(x,y) != null){
                if (this.boardModel.getPiece(x,y).loc[0] != x || this.boardModel.getPiece(x,y).loc[1] != y)
                {
                    return false;
                }
            }}
        }
        return true;
    }

    swapEmpty(loc)
    {
        console.log(loc)
        var x1 = this.getBlankSpace()[0];
        var y1 = this.getBlankSpace()[1];
        var x = this.boardModel.getPiece(loc[0],loc[1]);
        var y = this.boardModel.getPiece(x1,y1);
        this.boardModel.setPiece(loc[0],loc[1], y);
        this.boardModel.setPiece(x1, y1, x);
    }

    canSwap(loc)
    {
        var x1 = this.getBlankSpace()[0];
        var y1 = this.getBlankSpace()[1];
        var x2 = loc[0]
        var y2 = loc[1]
        if ((x1+1 == x2 && y2 == y1) || (x1-1 == x2 && y2 == y1) || (x1 == x2 && y2 == y1-1) || (x1 == x2 && y2 == y1+1))
        {
            this.swapEmpty(loc);
        }
    }

    swapOptions()
    {
        var x1 = this.getBlankSpace()[0];
        var y1 = this.getBlankSpace()[1];
        var options = []
        if (x1+1 < this.boardModel.getCol())
        {
            options.push([x1+1, y1])
        }
        if (x1-1>= 0  )
        {
            options.push([x1-1,y1])
        }
        if (y1 + 1 < this.boardModel.getRow())
        {
            options.push([x1,y1+1])
        }
        if (y1-1 >= 0)
        {
        options.push([x1,y1-1])
        }
        return options;
    }

    getRandom(options)
    {
        return options[Math.floor((Math.random()*options.length))];
    }

    shuffleBoardAction(){
        for (let i =0; i<20; i++)
        {
            var options = this.swapOptions();
            var y = this.getRandom(options)
            this.swapEmpty(y);
            console.log(options)
        }
        return this.boardModel;
    }    
  }