"use strict";
let game= {
    run(){
        while (true){
            let direction = mover.getDirection();
            if (direction === null){
                console.log("игра закончена");
                return;
            }
            let nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)){
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },
    init(){
        console.log("На игровом поле Вы увидете себя в видео о");
        renderer.render();
        console.log("Для начала игры необходимо ввести game.run(); + enter")
    }
}
game.init();