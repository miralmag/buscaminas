const buscaminas = {
    totalMines: 30,
    foundMines: 0,
    rows: 15,
    columns: 15,
    mineField: []
}

function fillBoard(){

    const board = document.querySelector('.board');

    //actualizar variables
    document.querySelector("html").style.setProperty("--num-rows",buscaminas.rows);
    document.querySelector("html").style.setProperty("--num-columns",buscaminas.columns);

    //borrar tablero actual
    while (board.firstChild) {
    board.firstChild.removeEventListener("contextmenu", flag);
    board.firstChild.removeEventListener("click", reveal);
    board.removeChild(board.firstChild);
    }

    //crear tablero
    for (let r=0; r<buscaminas.rows; r++){
        for (let c=0; c<buscaminas.columns; c++){
            let newDiv = document.createElement("div");
            board.appendChild(newDiv);
            newDiv.setAttribute("id","r" + r + "_c" + c );
            newDiv.dataset.row = r;
            newDiv.dataset.column = c;
            newDiv.addEventListener("contextmenu", flag);
            newDiv.addEventListener("click", reveal); 
        }
    }

}

function createEmptyMineField() {
    buscaminas.mineField = new Array(buscaminas.rows);
    for (let row=0; row<buscaminas.rows; row++){
        buscaminas.mineField[row] = new Array(buscaminas.columns);
    }
}

function setMines() {
    let setMines = 0;
    while (setMines<buscaminas.totalMines) {
        let row = Math.floor(Math.random() * buscaminas.rows);
        let column = Math.floor(Math.random() * buscaminas.columns);
        if (buscaminas.mineField[row][column] != "B") {
            buscaminas.mineField[row][column] = "B";
            setMines++;
        }
    }
}


fillBoard();

function reveal() {}
function flag() {}

