function Cell() {
  var SPAWNER = 0.8;
  this.alive = Math.random() > SPAWNER;
  this.neighbours = 0;
}
