class GameController{
    //TODO - split the game controller to two classes one for board one for feature
    constructor(viewrs)
    {
        this.boardModel;
        this.moves = new Moves;
        this.viewrs = viewrs;
        this.c = null;
        this.timer = 0;
    }

    finishGame(){
        var name = this.viewrs.finishGame.delete();
        console.log(this.moves)
        console.log(name);
        this.menu();
    }
    async updateTimer(){
        while(!this.c.cheackForWin())
        {
            await new Promise(r => setTimeout(r, 1000));
            this.viewrs.gameViewer.update(++this.timer)
        }
    }


    playStart(){
        this.viewrs.boardViewer.updateAction(this.updateD(this.c,this.viewrs.boardViewer,this.moves));
        this.updateTimer();
    }

    stopGame(){
        this.viewrs.boardViewer.updateAction(null);
    }

    startGame () {
        this.timer = 0 ;
        var size = this.viewrs.startGame.getRowFromClient();
        var genrateBoard = new ShuffleBoardController(size,size);
        this.boardModel = genrateBoard.genrateUnShuffleBoard(); 
        this.boardModel = genrateBoard.shuffle(this.moves);
        this.c = new BoardController(this.boardModel);
        this.viewrs.genrateBoardViewer.genrateBoard(this.boardModel.board);
        this.viewrs.gameViewer.create(this.updateState);
    }

    updateD(boardController,boardViwer,moves){
        function update(x,y)
        {
            boardController.canSwap([x,y],moves)
            boardViwer.update(boardController.boardModel.board, moves.getUserNumberMoves())
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
        this.playStart();
        this.awaitFinished();
    }    
}