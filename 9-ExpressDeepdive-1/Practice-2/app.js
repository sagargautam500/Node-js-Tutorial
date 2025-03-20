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

//external module
const express = require("express");

//core module
const path = require("path");

//localmodule
const handleHome = require("./routes/homePage");
const handleContactUs = require("./routes/contactPage");
const rootDir = require("./utils/pathUtil");

const app = express();

//direct use urlencoded from express::
app.use(express.urlencoded());

// app.use((req, res, next) => {
//   console.log(req.url, req.method, req.body);
//   next();
// });

app.use(handleHome);
app.use(handleContactUs);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3002, () => {
  console.log("server running at address http://localhost:3002");
});
