class StartGame{
    constructor(){
        this.size;
    }

    getRowFromClient(){
        this.size = window. prompt("Enter size: ");
        return this.size;
    }
}