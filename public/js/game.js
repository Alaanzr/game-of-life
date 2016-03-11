function Game(grid) {
  this.grid = grid;
  this.directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
}

Game.prototype.printCells = function() {
  console.log('\033[2J]');
  for (var i = 0; i < this.grid.numRows; i++) {
    var rowString = '';
    for (var j = 0; j < this.grid.numCols; j++) {
      var cell = this.grid.cells[i][j];
      rowString += cell.alive ? 'X|' : ' |';
    }
    console.log(rowString);
  }
};

Game.prototype.isUnderpopulated = function(rowIndex, columnIndex) {
  var cell = this.grid.cells[rowIndex][columnIndex];
  return cell.neighbours < 2;
};

Game.prototype.isOverpopulated = function(rowIndex, columnIndex) {
  var cell = this.grid.cells[rowIndex][columnIndex];
  return cell.neighbours > 3;
};

Game.prototype.isResurrectable = function(rowIndex, columnIndex) {
  var cell = this.grid.cells[rowIndex][columnIndex];
  return !cell.alive && cell.neighbours === 3;
};

Game.prototype.isInBounds = function(rowIndex, columnIndex) {
  var rowIsInBounds = rowIndex >=0 && rowIndex < this.grid.numRows;
  var columnIsInBounds = columnIndex >= 0 && columnIndex < this.grid.numCols;
  return rowIsInBounds && columnIsInBounds;
};

Game.prototype.updateNeighbouringCell = function(rowIndex, columnIndex) {
  var cell = this.grid.cells[rowIndex][columnIndex];
  cell.neighbours = 0;
  for (var i = 0; i < this.directions.length; i++) {
    var direction = this.directions[i];
    var rowDifference = rowIndex + direction[0];
    var columnDifference = columnIndex + direction[1];
    if (this.isInBounds(rowDifference, columnDifference)) {
      var neighbour = this.grid.cells[rowDifference][columnDifference];
      if (neighbour.alive) cell.neighbours++;
    }
  }
};

Game.prototype.updateNeighbours = function() {
  for (var i = 0; i < this.grid.numRows; i++) {
    for (var j = 0; j < this.grid.numCols; j++) {
      this.updateNeighbouringCell(i, j);
    }
  }
};

Game.prototype.updateCellState = function(rowIndex, columnIndex) {
  var cell = this.grid.cells[rowIndex][columnIndex];
  if (this.isUnderpopulated(rowIndex, columnIndex) || this.isOverpopulated(rowIndex, columnIndex)) {
    cell.alive = false;
  } else if (this.isResurrectable(rowIndex, columnIndex)) {
    cell.alive = true;
  }
};

Game.prototype.updateCells = function() {
  for (var i = 0; i < this.grid.numRows; i++) {
    for (var j = 0; j < this.grid.numCols; j++) {
      this.updateCellState(i, j);
    }
  }
};

module.exports = Game;
