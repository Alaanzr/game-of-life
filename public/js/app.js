var grid = new Grid(50, 50, Cell);
var game = new Game(grid);
var interval = setInterval(function() {
  game.printCells();
  game.updateNeighbours();
  game.updateCells();
}, 100);
