const EventEmitter = require("events");
const fs = require("fs");

class GridReadStream extends EventEmitter {
  constructor(options = {}) {
    super(options);
    this.filename = options.filename || "untitled.txt";
  }

  run() {
    let self = this;
    fs.writeFile(this.filename, "", function(err) {
      if (err) self.emit("error");
      self.emit("open");
    });
  }
}

module.exports = exports = GridReadStream;
