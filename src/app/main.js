define(['app/ticTacToe', 'app/utils'], function (TicTacToe, utils) {
    'use strict';

    var gameModel = new TicTacToe('o', 'Ivan', "Petkan");

    var gameBoard = document.getElementById('play-board');

    gameBoard.addEventListener('click', onBoardClick);

    function onBoardClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        if(utils.hasClass(ev.target, 'col')) {
            console.log(ev.target.dataset.pos);
        }

    }


    console.log(gameModel);
});
