const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3001, () => {
  console.log("server running at address http://localhost:3001");
});
