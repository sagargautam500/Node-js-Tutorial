// QUESTION FOR PRACTICE::
// Create a new project.
// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also. 
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.



const express=require('express');

const app=express();

app.get("/",(req,res)=>{
console.log(req.url,req.method)
res.send('<h1>practice set start</h1>');
})

app.listen(3002,()=>{
  console.log("server running at address http://localhost:3002");
})