class Board {
    constructor(board) {
        this.board = board
    }

    getPiece(x,y){
        return this.board[x][y];
    }

    setPiece(x,y, piece){
        this.board[x][y] = piece;
    }
    
    getBlankSpace() {
        for (let x =0; x<this.board[0].length; x ++)
        {
            for (let y = 0; y<this.board[0].length; y++)
            {
                if (this.board[x][y] == null)
                {
                    return [x,y];
                }
            }
        }
    }

    cheackForWin() {
        for (let x =0; x<this.board[0].length; x ++)
        {
            for (let y = 0; y<this.board[0].length; y++)
            {
                if (!(this.board[x][y] == null ||(this.board[x][y].loc[0] == x  && this.board[x][y].loc[1]==y )))
                {
                    return false;
                }
            }
        }
        return true;
    }
    swap(loc1, loc2) {
        var x = this.board[loc1[0]][loc1[1]]
        var y = this.board[loc2[0]][loc2[1]]
        console.log(x)
        console.log(y)
        this.board[loc1[0]][loc1[1]]  = y
        this.board[loc2[0]][loc2[1]] = x
    }

    swapEmpty(loc)
    {
        var x1 = this.getBlankSpace()[0];
        var y1 = this.getBlankSpace()[1];
        var x = this.board[loc[0]][loc[1]]
        var y = this.board[x1][y1]
        this.board[loc[0]][loc[1]]  = y
        this.board[x1][y1] = x
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
        if (x1+1 < this.board[0].length)
        {
            options.push([x1+1, y1])
        }
        if (x1-1>= 0  )
        {
            options.push([x1-1,y1])
        }
        if (y1 + 1 < this.board[0].length)
        {
            options.push([x1,y1+1])
        }
        if (y1-1 >= 0)
        {
        options.push([x1,y1-1])
        }
        return options;
    }
  
  }