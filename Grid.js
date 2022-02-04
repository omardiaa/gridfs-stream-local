const GridWriteStream = require("./GridWriteStream");

function Grid() {}

Grid.prototype.createWriteStream = function() {
  return new GridWriteStream();
};

module.exports = exports = Grid;