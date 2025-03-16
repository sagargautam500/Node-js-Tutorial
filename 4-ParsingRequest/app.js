const http = require("http");
const userRequestHandler = require("./userInput");  //userRequestHandler name not need to same

const server = http.createServer(userRequestHandler);

server.listen(3000, () => {
  console.log("Server running at adresss http://localhost:3000");
});
