define([], function () {
    'use strict';

    /**
     * Represents common utils .
     *
     * @exports Tic Tac Toe
     */

    var constants = {
        PLAYER_IS_NOT_VALID: 'Player is not valid!',
        POSITION_IS_NOT_CORRECT: 'Position is not correct. It must be a number between 1 and 9!'
    };

    /**
     * Game model
     *
     * @param firstPlays {string} - the player who plays first
     * @param nameX {string} - the name of player who will play with "X"
     * @param nameO {string} - the name of player who will play with "O"
     * @param onWin {function} - callback will called when have have winner
     * @constructor
     */
    function TicTacToe(firstPlays, nameX, nameO, onWin) {
        var first = firstPlays || 'x';

        if (!this._isPlayerValid(first)) {
            throw constants.PLAYER_IS_NOT_VALID;
        }

        this.onWin = onWin || function (win) {
                console.log(win);
            };
        this._WINS = ['123', '456', '789', '147', '258', '369', '159', '357'];
        this.players = {
            x: {name: nameX || 'Player1', moves: ''},
            o: {name: nameO || 'Player2', moves: ''},
            current: first
        };
    }

    /**
     * Checks if player wins
     *
     * @param moves {string} - player moves
     * @returns {string|null} - win combination (three letters) or null if not match
     */
    TicTacToe.prototype.getWinTriade = function (moves) {
        var i,
            result = null,
            winsCount = this._WINS.length;

        for (i = 0; i < winsCount; i += 1) {
            if (this._checkWin(this._WINS[i], moves)) {
                result = this._WINS[i];
                break;
            }
        }

        return result;
    };

    /**
     * Checks if player moves match given win combination
     *
     * @param win {string} - win combination (three letters)
     * @param moves {string} - player's moves
     * @returns {boolean}
     * @private
     */
    TicTacToe.prototype._checkWin = function (win, moves) {
        var i,
            WIN_LENGTH = 3;

        for (i = 0; i < WIN_LENGTH; i += 1) {
            if (moves.indexOf(win[i]) < 0) {
                break;
            }
        }

        return i === WIN_LENGTH;
    };

    /**
     * Saves player's move
     *
     * @param position {number} - represents position
     */
    TicTacToe.prototype.move = function (position) {
        var win = {},
            currentPlayer = this.players[this.players.current];

        if (!this._isPositionValid(position)) {
            throw constants.POSITION_IS_NOT_CORRECT;
        }

        currentPlayer.moves += +position;

        win.triade = this.getWinTriade(currentPlayer.moves);

        if (win.triade) {
            win.player = this.players.current;
            this.onWin(win);
        } else {
            this.swapCurrentPlayer();
        }
    };

    /**
     * Validates position number
     *
     * @param position {number}
     * @returns {boolean}
     * @private
     */
    TicTacToe.prototype._isPositionValid = function (position) {
        return (typeof position === 'number') && position > 0 && position < 10;
    };

    /**
     * Validates player string
     *
     * @param player {string}
     * @returns {boolean}
     * @private
     */
    TicTacToe.prototype._isPlayerValid = function (player) {
        return player === 'x' || player === 'o';
    };

    TicTacToe.prototype.swapCurrentPlayer = function () {
        if (this.players.current === 'x') {
            this.players.current = 'o';
        } else if (this.players.current === 'o') {
            this.players.current = 'x';
        }
    };

    return TicTacToe;
});
