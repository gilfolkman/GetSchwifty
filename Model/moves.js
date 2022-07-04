class Moves{
    constructor(){
        this.shuffleMoves = []
        this.userMoves = []
    }

    addShuffleMove(move){
        this.shuffleMoves.push(move);
    }

    addUserMove(move){
        this.userMoves.push(move);
    }

    getUserNumberMoves(){
        return this.userMoves.length;
    }

    getLastMove(){
        if (this.userMoves.length != 0){
            return this.userMoves.pop();
        }
        if (this.shuffleMoves.length !=0){
            return this.shuffleMoves.pop();
        }
    }
}