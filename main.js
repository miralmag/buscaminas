function fillBoard(rows, columns){
    const board = document.querySelector('.board');

    document.querySelector("html").style.setProperty("--num-rows",rows);
    document.querySelector("html").style.setProperty("--num-columns",columns);

    for (let r=0; r<rows; r++){
        for (let c=0; c<columns; c++){
            let newDiv = document.createElement("div");
            board.appendChild(newDiv);
        }
    }
}

fillBoard(10, 10);