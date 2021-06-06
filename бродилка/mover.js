"use strict";
let mover = {
    getDirection(){
        while (true){
            const massiveDirections = [1,2,3,4,5,6,7,8,9];
            let direction = parseInt(prompt("Введи одно из этих чисел для перемещения: 1,2,3,4,6,7,8,9"));
            if (isNaN(direction)){
                return null;
            }
            if (!massiveDirections.includes(direction)){
                alert("Необходимо ввести одно из этих чисел: 1,2,3,4,6,7,8,9");
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction){
        const nextPosition = {
            x:player.x,
            y:player.y
        }
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    },
    canPlayerMakeStep(nextPoint){
        return nextPoint.x >= 0 && nextPoint.x < config.colsCoat && nextPoint.y >= 0 && nextPoint.y <nextPoint.y < config.rowsCoat
    }
}