module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile('game-of-life.html', {
      root: './public/views'
    });
  });
};
