const EventEmitter = require("events");

class GridWriteStream extends EventEmitter {
  constructor(options = {}) {
    super(options);
  }
  run() {
    this.emit("open");
  }
}

// const myEmitter = new GridWriteStream();
// myEmitter.on("func", () => {
//   console.log("an event occurred!");
// });
// myEmitter.func();
// function GridWriteStream() {}

// GridWriteStream.addEventListener(
//   "build",
//   function(e) {
//     /* ... */
//   },
//   false
// );
module.exports = exports = GridWriteStream;
