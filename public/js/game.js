function Cell() {
  var SPAWNER = 0.8;
  this.alive = Math.random() > SPAWNER;
  this.neighbours = 0;
}



function Game(numRows, numCols) {
  this.gridSize = numRows * numCols;
  this.grid = this.generateGrid(numRows, numCols);
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

Game.prototype.generateGrid = function(numRows, numCols) {
  var grid = {
    numRows: numRows,
    numCols: numCols,
    cells: []
  };

  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      grid.cells.push(new Cell());
    }
  }

  return grid;
};

Game.prototype.printCells = function() {
  for (var i = 0; i < this.grid.numRows; i++) {
    var rowString = '';
    for (var j = 0; j < this.grid.numCols; j++) {
      var cell = this.grid.cells[i * j];
      rowString += cell.alive ? 'X|' : ' |';
    }
    console.log(rowString);
  }
};
