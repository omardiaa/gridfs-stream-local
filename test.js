const Grid = require("./Grid");

const myGrid = new Grid();
const writeStream = myGrid.createWriteStream();
writeStream.on("open", () => {
  console.log("Opened");
});
writeStream.run(); //This will need to be added in the main program
