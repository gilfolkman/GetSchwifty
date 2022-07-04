


const viewers = {
    boardViewer : new BoardViewer(),
    genrateBoardViewer : new GenrateBoardViewer(),
    startGame : new StartGame(),
    finishGame : new VictoryViewer(),
    gameViewer : new GameViewer(this.boardViewer)
}

controller = new GameController (viewers)
controller.menu();
