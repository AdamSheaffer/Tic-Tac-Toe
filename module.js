var TIX = (function (JQ) {
  'use strict';

  var table = [[1,2,3],[4,5,6],[7,8,9]];
  var squareClicked;
  var playerTurn = 'X';

  return {

    findPlayerTurn: function() {
      return playerTurn;
    },

    setSquareClicked: function(td) {
      squareClicked = td;
    },

    takeSquare: function(player) {
      for(var i=0; i<table.length; i++) {
        for(var j=0; j<table[i].length; j++) {
          if (squareClicked == table[i][j]) {
            table[i][j] = player;
          }
        }
      }
    },

    changeTurns: function(currentPlayer) {
      if (currentPlayer === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    },

    checkForWin: function(playerTurn) {
      checkHorizontal(playerTurn);
      checkVertical(playerTurn);
      checkDiagonal1(playerTurn);
      checkDiagonal2(playerTurn);
    }

  }

  function checkHorizontal(playerTurn) {
    for(var i=0; i<table.length; i++) {
      if(table[i][0] === table[i][1] && table[i][0] === table[i][2]) {
        alert(playerTurn + " wins!");
      }
    }
  }

  function checkVertical(playerTurn) {
    for(var i=0; i<table.length; i++) {
      if(table[0][i] === table[1][i] && table[0][i] === table[2][i]) {
        alert(playerTurn + " wins!");
      }
    }
  }

  function checkDiagonal1(playerTurn) {
      if(table[0][0] === table[1][1] && table[0][0] === table[2][2]) {
        alert(playerTurn + " wins!");
      }
    }

  function checkDiagonal2(playerTurn) {
    if(table[0][2] === table[1][1] && table[0][2] === table[2][0]) {
      alert(playerTurn + " wins!");
    }
  }

}(jQuery));
