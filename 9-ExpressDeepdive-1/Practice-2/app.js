// QUESTION FOR PRACTICE-1::
// Create a new project.
// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also.
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.

// QUESTION FOR PRACTICE-2::
// Reuse the app from the last assignment
// 1. Parse the body of the contact-us request and log it to console.
// 2. Move the code to separate local modules and use the Express router to import and use them in app.js
// 3. Move all the html code to html files and serve them using the file helper.
// 4. Also add a 404 page for this app.

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});
app.use("/", (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next(); //if same path use for multiple middleware then need next()
});

app.get("/", (req, res, next) => {
  console.log("handling / path now", req.url, req.method);
  res.send("<h1>welcome to the practice set start</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us path for GET ", req.url, req.method);
  res.send(`
            <h1>please fill details now</h1>
            <form action="contact-us" method="POST">
             <input type="text" name="Name" placeholder="enter your name" required />
             <input type="email" name="Email" placeholder="enter your email" required />
             <input type="submit" />
            </form>
            `);
});

app.post("/contact-us", (req, res) => {
  console.log("handling /contact-us path for POST", req.url, req.method);
  res.send(`<h2>we will contact you shortly</h2>`);
});

app.listen(3002, () => {
  console.log("server running at address http://localhost:3002");
});
