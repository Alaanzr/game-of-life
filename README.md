### Overview
A command line tool that simulates Conway's Game of Life

### Example set-up
```
var grid = new Grid(50, 50, Cell);
var game = new Game(grid);
var interval = setInterval(function() {
  game.printCells();
  game.updateNeighbours();
  game.updateCells();
}, 100);
```

### Screenshot of simulation
![Screenshot](/public/images/screenshot.png)
