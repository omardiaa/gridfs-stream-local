const GridWriteStream = require("./GridWriteStream");

function Grid() {}

Grid.prototype.createWriteStream = function(options) {
  return new GridWriteStream(options);
};

module.exports = exports = Grid;