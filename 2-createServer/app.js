const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req)
process.exit(); //stop event loop if need 
})

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running on address at http://localhost:${PORT}`)
})