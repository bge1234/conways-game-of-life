$(document).ready(function() {
  drawGrid(10, 10);
  changeState(1, 1, "alive");
  changeState(3, 4, "alive");
  changeState(0, 7, "alive");
  changeState(1, 1, "dead");
});

function drawGrid(rows, cols) {
  for (var i = 0; i < rows; i++) {
    $('#table').append('<tr id="row' + i + '"></tr>');

    for (var j = 0; j < cols; j++) {
      $('#row' + i).append('<td id="cell' + i + j + '" class = "dead">cell[' + i + '][' + j + ']</td>');
    }
  }
}

function changeState(row, col, newState) {
  $('#cell' + row + col).removeClass().addClass(newState);
}
