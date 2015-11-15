define(['app/ticTacToe', 'app/utils'], function (TicTacToe, utils) {
    'use strict';

    var gameModel = new TicTacToe('o', 'Player1', "Player2", onWin);

    var gameBoard = document.getElementById('play-board');
    var showWinner = document.getElementById('show-winner');

    gameBoard.addEventListener('click', onBoardClick);

    function onBoardClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        var target = ev.target;
        var isMove = utils.hasClass(target, 'col') &&
                !utils.hasClass(target, 'x') && !utils.hasClass(target, 'o');

        if(isMove) {
            console.log(target);
            utils.setClass(target, gameModel.players.current);
            gameModel.move(+target.dataset.pos[1]);
        }

    }

    function onWin(win) {
        console.log('The winner is ' + gameModel.players[win.player].name);
    }


    console.log(gameModel);
});
