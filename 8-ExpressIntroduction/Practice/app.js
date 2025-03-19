const express=require('express');

const app=express();

app.get("/",(req,res)=>{
console.log(req.url,req.method)
res.send('<h1>practice set start</h1>');
})

app.listen(3002,()=>{
  console.log("server running at address http://localhost:3002");
})