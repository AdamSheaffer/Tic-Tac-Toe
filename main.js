$(document).ready(function() {

  $('td').click(function(){
    TIX.setSquareClicked( (this).id );
    if ($(this).hasClass('occupied') == false) {
      var turn = TIX.findPlayerTurn();
      $(this).text(turn);
      $(this).addClass('occupied');
      TIX.takeSquare(turn);
      TIX.checkForWin(turn);
      TIX.changeTurns(turn);
    } else {
      alert('squares taken!');
    }
  });

});
