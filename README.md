### Overview
A command line tool that simulates Conway's Game of Life.

Still a work-in-progress; need to extract some cell-related code into the Cell constructor but it serves as a working prototype for now.

### To run the tool
```node public/js/app.js```

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
