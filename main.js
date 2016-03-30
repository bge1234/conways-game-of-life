var living = [];
var totalSize = 0;

$(document).ready(function() {
  drawGrid(10, 10);
  changeState(1, 1, "dead");
  // stepGame();
  // stepGame();
});

function drawGrid(rows, cols) {
  totalSize = rows * cols;

  for (var i = 0; i < rows; i++) {
    $('#table').append('<tr id="row' + i + '"></tr>');
    living[i] = [];

    for (var j = 0; j < cols; j++) {
      $('#row' + i).append('<td id="cell' + i + j + '" class = "alive">' + i + ' - ' + j + '</td>');
      living[i][j] = true;
    }
  }
}

function changeState(row, col, newState) {
  $('#cell' + row + col).removeClass().addClass(newState);
  living[row][col] = !living[row][col];
}

function stepGame() {
  var oldLiving = living;

  for (var i = 0; i < oldLiving.length; i++) {
    for (var j = 0; j < oldLiving.length; j++) {
      var neighbors = 0;

      //count neighbors of this cell
      if(i === 0 && j === 0) {
        if(oldLiving[i][j + 1])
          neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
        // if(oldLiving[i + 1][j + 1])
        //   neighbors++;
      }
      else if(i === 0 && j === (oldLiving.length - 1)) {
        if(oldLiving[i][j - 1])
          neighbors++;
        // if(oldLiving[i + 1][j - 1])
        //   neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
      }
      else if(i === (oldLiving.length - 1) && j === 0) {
        if(oldLiving[i - 1][j])
          neighbors++;
        // if(oldLiving[i - 1][j + 1])
        //   neighbors++;
        if(oldLiving[i][j + 1])
          neighbors++;
      }
      else if(i === (oldLiving.length - 1) && j === (oldLiving.length - 1)) {
        // if(oldLiving[i - 1][j - 1])
        //   neighbors++;
        if(oldLiving[i - 1][j])
          neighbors++;
        if(oldLiving[i][j - 1])
          neighbors++;
      }
      else if(i === 0) {
        if(oldLiving[i][j - 1])
          neighbors++;
        if(oldLiving[i][j + 1])
          neighbors++;
        // if(oldLiving[i + 1][j - 1])
        //   neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
        // if(oldLiving[i + 1][j + 1])
        //   neighbors++;
      }
      else if(j === 0) {
        if(oldLiving[i - 1][j])
          neighbors++;
        // if(oldLiving[i - 1][j + 1])
        //   neighbors++;
        if(oldLiving[i][j + 1])
          neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
        // if(oldLiving[i + 1][j + 1])
        //   neighbors++;
      }
      else if(i === (oldLiving.length - 1)) {
        // if(oldLiving[i - 1][j - 1])
        //   neighbors++;
        if(oldLiving[i - 1][j])
          neighbors++;
        // if(oldLiving[i - 1][j + 1])
        //   neighbors++;
        if(oldLiving[i][j - 1])
          neighbors++;
        if(oldLiving[i][j + 1])
          neighbors++;
      }
      else if(j === (oldLiving.length - 1)) {
        // if(oldLiving[i - 1][j - 1])
        //   neighbors++;
        if(oldLiving[i - 1][j])
          neighbors++;
        if(oldLiving[i][j - 1])
          neighbors++;
        // if(oldLiving[i + 1][j - 1])
        //   neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
      }
      else {
        // if(oldLiving[i - 1][j - 1])
        //   neighbors++;
        if(oldLiving[i - 1][j])
          neighbors++;
        // if(oldLiving[i - 1][j + 1])
        //   neighbors++;
        if(oldLiving[i][j - 1])
          neighbors++;
        if(oldLiving[i][j + 1])
          neighbors++;
        // if(oldLiving[i + 1][j - 1])
        //   neighbors++;
        if(oldLiving[i + 1][j])
          neighbors++;
        // if(oldLiving[i + 1][j + 1])
        //   neighbors++;
      }

      //kill or regenerate this cell if necessary
      if(oldLiving[i][j] && (neighbors < 2 || neighbors > 3)) {
        changeState(i, j, "dead");
        living[i][j] = !oldLiving[i][j];
      }
      else if(!oldLiving[i][j] && neighbors === 3) {
        changeState(i, j, "alive");
        living[i][j] = !oldLiving[i][j];
      }
    }
  }
}
