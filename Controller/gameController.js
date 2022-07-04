class GameController{
    constructor()
    {
        this.boardModel;
        this.c;
        this.v;
    }

    startGame(){
        
    }

    finishGame(){

    }

    playGame(){

    }

    startGame = (startGameViewer,boardViewer) => {
        var size =startGameViewer.getRowFromClient();
        var genrateBoard = new ShuffleBoardController(size,size);
        this.boardModel = genrateBoard.genrateUnShuffleBoard(); 
        this.boardModel = genrateBoard.shuffle(); 
        var z = new GenrateBoardViewer();
        this.v = boardViewer;
        this.c  = new BoardController(this.boardModel);
        z.genrateBoard(this.boardModel.board,(x,y)=>{this.update(x,y)});
    }
    update(x,y){
        this.c.canSwap([x,y])
        this.v.update(this.boardModel.board)
        if (this.c.cheackForWin())
        {
            var a = new VictoryViewer()
            a.delete();
            this.startGame()
        }
    }


     
    
}