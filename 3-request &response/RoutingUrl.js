const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.headers,req.method,req.url)
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>req&res</title></head>');
    res.write('<body><h1>Welcome To Home Page</h1></body>');
    res.write('/<html>');
    res.end();
    return;
  } else if (req.url == '/product') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>req&res</title></head>');
    res.write('<body><h1>Welcome To Product page</h1></body>');
    res.write('/<html>');
    return res.end();;
  }
  // res.setHeader('Content-Type','json');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>req&res</title></head>');
  res.write('<body><h1>Welcome To Backend Server</h1></body>');
  res.write('/<html>');
  res.end();
  

})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address at http://localhost:${PORT}`)
})