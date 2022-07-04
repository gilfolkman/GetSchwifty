class GameController{
    constructor(viewrs)
    {
        this.boardModel;
        this.moves = new Moves;
        this.viewrs = viewrs;
        this.c = null;
    }

    finishGame(){
        var name = this.viewrs.finishGame.delete();
        console.log(this.moves)
        console.log(name);
        this.menu();
    }

    playGame(){
        this.c = new BoardController(this.boardModel);
        this.viewrs.genrateBoardViewer.genrateBoard(this.boardModel.board);
        this.viewrs.boardViewer.updateAction(this.updateD(this.c,this.viewrs.boardViewer,this.moves));
    }

    startGame () {
        console.log(this.viewrs)
        var size = this.viewrs.startGame.getRowFromClient();
        var genrateBoard = new ShuffleBoardController(size,size);
        this.boardModel = genrateBoard.genrateUnShuffleBoard(); 
        this.boardModel = genrateBoard.shuffle(this.moves);
    }

    updateD(p,b,moves){
        function update(x,y)
        {
            p.canSwap([x,y],moves)
            b.update(p.boardModel.board)
        }
        return update;
    }

    async awaitFinished(){
        while(!this.c.cheackForWin())
        {
            await new Promise(r => setTimeout(r, 2000));
        }
        this.finishGame()
    }

    menu(){
        this.startGame();
        this.playGame();
        this.awaitFinished();
    }

     
    
}