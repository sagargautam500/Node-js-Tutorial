const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>UserInputForm</title></head>');
    res.write('<body><h1>Enter Details</h1>');
    res.write('<form action="submit-details" method="POST">')
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="Username"  placeholder="Enter your name.." ><br>')
    res.write('<label for="gender">Gender:</label>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" >')
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" >')
    res.write('<br><button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>');
    res.end();
    return;
  }
  if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
  fs.writeFileSync('user.txt',"Sagar gautam file write");
  res.statusCode=302;
  res.setHeader('Location','/')
  }
  // res.setHeader('Content-Type','json');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>UserInput</title></head>');
  res.write('<body><h1>Welcome To Backend Server</h1></body>');
  res.write('</html>');
  res.end();


})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address at http://localhost:${PORT}`)
})