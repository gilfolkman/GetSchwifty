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

    getRow(){
        return this.board.length;
    }
    getCol(){
        return this.board.length;
    }

    getBoard(){
        return this.board;
    }

  }