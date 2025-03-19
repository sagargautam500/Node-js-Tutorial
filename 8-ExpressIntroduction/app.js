//core module:
// const http = require("http");

//External module:
const express = require("express");

//local module:
const RequestHandler = require("./userInput");

//coding (body)part::
const app = express();

//adding middleware:
app.get("/", (req, res, next) => {
  console.log("came in first", req.url, req.method);
  res.send("<p>express introduction series</p>");
  next(); //move to next operation function call: which give to response
});

app.post("/", (req, res, next) => {
  console.log("came in first another", req.url, req.method);
  res.send("<p>express introduction another series</p>");  // respond already sent in this path "/" so do not repeat
  // next(); // now respone already sent .so do not use next()
});

app.get("/submit-details", (req, res, next) => {
  console.log("came in Second", req.url, req.method);
  res.send("<h1>Welcome to express introduction series</h1>");
  //res.end not neeed now
  // res.end(); //response end::
});

app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`);
});

//now not need  this create server and http module...................using express:
// const server = http.createServer(app);
// server.listen(3002, () => {
//   console.log(`Server running on http://localhost:3002`);
// });
