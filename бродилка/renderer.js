"use strict";
let renderer = {
    map:"",
    render(){
        for (let rows = 0; rows < config.rowsCoat; rows++){
            for (let cols = 0; cols < config.colsCoat; cols++){
                if(player.x === cols && player.y === rows){
                    this.map += "o ";
                } else{
                    this.map += "x ";
                }
            }
            this.map += "\n";
        }
    console.log(this.map);
    },
    clear(){
        console.clear();
        this.map = "";
    }

}