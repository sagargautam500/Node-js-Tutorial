const http = require("http");
const { testSyntaxError } = require("./syntaxError");
const testRuntimeError = require("./runtimeError");
const testLogicalError = require("./logicalError");
const RequestHandler = require("./userInput");
// const calculateArea = require("./practice");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // testSyntaxError();
  // testRuntimeError();
  // testLogicalError();
  RequestHandler(req, res);
  // calculateArea();
  // res.end();
});

const PORT = process.env.PORT || 0; // 0 lets the OS assign a free port
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${server.address().port}`);
});

// server.listen(3000, () => {
//   console.log(`Server running on http://localhost:3000`);
// });
