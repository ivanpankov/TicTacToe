define(['app/ticTacToe'], function (TicTacToe) {
    'use strict';

    var gameModel = new TicTacToe('o', 'Ivan', "Petkan");

    var gameBoard = document.getElementById('play-board');

    gameBoard.addEventListener('click', onBoardClick);

    function onBoardClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        console.log(hasClass(ev.target, 'col'));
    }

    function hasClass(el, className) {
        var elClasses = el.className.split(' ');

        return elClasses.indexOf(className) >= 0;
    }

    console.log(gameModel);
});
