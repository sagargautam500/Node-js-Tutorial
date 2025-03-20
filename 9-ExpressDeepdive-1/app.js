const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Logging Middleware
app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});
app.use("/", (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

// Routes
app.get("/", (req, res) => {
  console.log("handling / path now", req.url, req.method);
  res.send(`
       <h1>welcome to the practice set start</h1>
       <a href="/contact-us">Fill the form</a>
    `);
});

app.get("/contact-us", (req, res) => {
  console.log("handling /contact-us path for GET", req.url, req.method);
  res.send(`
    <h1>please fill details now</h1>
    <form action="contact-us" method="POST">
      <input type="text" name="Name" placeholder="enter your name" required />
      <input type="email" name="Email" placeholder="enter your email" required />
      <input type="submit" />
    </form>
     <a href="/">Back to Home Page</a>
  `);
});

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res) => {
  console.log(
    "handling /contact-us path for POST",
    req.url,
    req.method,
    req.body
  );
  const jsObject = req.body;

  res.send(`
    <h1>Person details:</h1>
    <h3>Name: <strong>${jsObject.Name}</strong></h3>
    <h3>Email: <strong>${jsObject.Email}</strong></h3>
    <a href="/contact-us">Back Form Page</a><br>
    <a href="/">Back Home Page</a>
  `);
});

// Start Server
app.listen(3002, () => {
  console.log("server running at http://localhost:3002");
});
