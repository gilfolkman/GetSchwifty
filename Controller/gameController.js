class GameController{
    constructor(viewrs)
    {
        this.boardModel;
        this.viewrs = viewrs;
        this.c = null;
    }

    finishGame(){
        var name = this.viewrs.finishGame.delete();
        console.log(name)
    }

    playGame(){
        this.c = new BoardController(this.boardModel);
        this.viewrs.genrateBoardViewer.genrateBoard(this.boardModel.board);
        this.viewrs.boardViewer.updateAction(this.updateD(this.c,this.viewrs.boardViewer));
        return new Promise(
    }

    startGame () {
        console.log(this.viewrs)
        var size = this.viewrs.startGame.getRowFromClient();
        var genrateBoard = new ShuffleBoardController(size,size);
        this.boardModel = genrateBoard.genrateUnShuffleBoard(); 
        this.boardModel = genrateBoard.shuffle();
    }

    updateD(p,b){
        function update(x,y)
        {
            p.canSwap([x,y])
            b.update(p.boardModel.board)
        }
        return update;
    }

    menu(){
        this.startGame();
        this.playGame();
    }

     
    
}