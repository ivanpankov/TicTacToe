define(['app/ticTacToe', 'app/utils'], function (TicTacToe, utils) {
    'use strict';

    var gameModel, gameBoard, showWinner;

    init();


    function init() {
        gameModel = new TicTacToe('o', 'Player1', "Player2", onWin);
        gameBoard = document.getElementById('play-board');
        showWinner = document.getElementById('show-winner');

        utils.removeClass(gameBoard, 'hidden');
        utils.setClass(showWinner, 'hidden');

        gameBoard.addEventListener('click', onBoardClick);
    }

    function onBoardClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        var target = ev.target;
        var isMove = utils.hasClass(target, 'col') &&
                !utils.hasClass(target, 'x') && !utils.hasClass(target, 'o');

        if(isMove) {
            utils.setClass(target, gameModel.players.current);
            gameModel.move(+target.dataset.pos[1]);
        }

    }

    function onWin(win) {
        gameBoard.removeEventListener('click', onBoardClick);
        showWinner.innerHTML = 'The winner is ' + gameModel.players[win.player].name;
        utils.setClass(gameBoard, 'hidden');
        utils.removeClass(showWinner, 'hidden');
    }

    function noWinner() {
        //TODO: to make case when no winner.
    }


    //TODO: fix documents
    //TODO: add screen for user names
});
