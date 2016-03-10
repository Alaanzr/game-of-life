function Grid(numRows, numCols, Cell) {
  this.numRows = numRows;
  this.numCols = numCols;
  this.cells = [];
  for (var i = 0; i < this.numRows; i++) {
    var row = [];
    for (var j = 0; j < this.numCols; j++) {
      row.push(new Cell());
    }
    this.cells.push(row);
  }
}
