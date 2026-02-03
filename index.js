const fs = require("fs");
const http = require("http");

//////////////////////////////////////
// FILES
/*
// blocking, synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written successfully");

// non-blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error reading start file:", err);

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) return console.log("Error reading second file:", err);

    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      if (err) return console.log("Error reading append file:", err);

      const finalText = `${data2}\n${data3}`;
      fs.writeFile("./txt/finalOutput.txt", finalText, (err) => {
        if (err) return console.log("Error writing final output file:", err);
        console.log("Final output file written successfully");
      });
    });
  });
});

console.log("Reading files...");
*/

//////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
