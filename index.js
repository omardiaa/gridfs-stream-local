const Grid = require("./Grid");

const myGrid = new Grid();
const writeStream = myGrid.createWriteStream({filename: "newFile"});
writeStream.on("close", file => {
  console.log(`File id: ${file._id}`);
});
writeStream.on("error", () => {
  console.log("An error has occurred");
});
writeStream.run(); //This will need to be added in the main program

