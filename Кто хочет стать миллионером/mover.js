"use strict";
let mover = {
    /**
     * Приветствие пользователя
     */
    welcome(){
        let hello = prompt("Привет, уважаемый пользователь! На данный момент у вас 0 баллов. Вам будут задаваться вопросы, " +
                    "за каждый из которых дается 1 балл. В конце игры будут подсчитаны результаты. Введите 'да', чтобы начать игру. Если передумали, нажмите: 'Отмена'");
        if (hello !== "да" && hello !== "Да" && hello !== "ДА"){
            return null;
        }
        return hello;
    },
    /**
     * Получение ответов на вопросы
     * @returns {number} суммарное количество очков, полученное за все вопросы
     */
    getAQuestion(){
        const answer = [];
        for (let question of questions){
            if (prompt(question) === null) {
                break;
            }
            answer.push(prompt(question));
            }
        if (answer[0] === "г"){
            points++;
        }
        if (answer[1] === "а"){
            points++;
        }
        if (answer[2] === "в"){
            points++;
        }
        if (answer[3]==="а"){
            points++;
        }
        if (answer[4]==="б"){
            points++;
        }
        return points;
    }
}