"use strict";

let game = {
    /**
     * включается при старте игры
     */
    run(){
        const raund = mover.welcome();
        if (raund === null){
            console.log("Игра закончена");
            alert("Вы заработали очков: " + points + " из 5");
            return;

        }
            const raund1 = mover.getAQuestion();

        alert("Вы заработали очков: " + points + " из 5");
        if(prompt("Будете играть снова?")){
            points = 0;
            game.run();
        };

    },
    /**
     * включается при открытии консолию: это первоначальные настройки
     */
    init(){
        console.log("Чтобы начать игру, введите game.run(); + enter");
    }
}
game.init();