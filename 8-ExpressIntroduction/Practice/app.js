// QUESTION FOR PRACTICE::
// Create a new project.
// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also.
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.

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

// app.use((req, res) => {
//   console.log("third middleware", req.url, req.method);
//   res.send("<h1>practice set start</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("handling / path now", req.url, req.method);
  res.send("<h1>welcome to the practice set start</h1>");
  // next();
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
app.post("/contact-us",(req,res)=>{
  console.log("handling /contact-us path for POST", req.url, req.method);
  res.send(`<h2>we will soon contact for you</h2>`);
})

app.listen(3002, () => {
  console.log("server running at address http://localhost:3002");
});
