var Grid = require('./grid.js'), Game = require('./game.js'), Cell = require('./cell.js');

var grid = new Grid(50, 50, Cell);
var game = new Game(grid);
var interval = setInterval(function() {
  game.printCells();
  game.updateNeighbours();
  game.updateCells();
}, 100);
