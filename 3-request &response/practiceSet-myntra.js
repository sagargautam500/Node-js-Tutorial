const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/men") {
    res.write(`<h1>Welcome to Our myntra Men Section </h1>
       <a href='/'>Back<a>`);
    return res.end();
  }
  if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Women</title></head>");
    res.write(`<body>
       <h1>Welcome to Our myntra Women Section </h1>
         <a href='/'>Back<a>
       </body>`);
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/kids") {
    res.write(`<h1>Welcome to Our myntra Kids Section </h1>
      <a href='/'>Back<a>`);
   return res.end();
  }
  if (req.url === "/cart") {
    res.write(`<h1>Welcome to Our myntra cart Section </h1>
      <a href='/'>Back<a>`);
   return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>NavBar</title></head>");
  res.write(`<body>
       <h1>Welcome to Our myntra NavBar Section </h1>
       <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/men">Men</a></li>
       <li><a href="/women">Women</a></li>
       <li><a href="/kids">Kids</a></li>
       <li><a href="/cart">Cart</a></li>
       </ul>
       </body>`);
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on adresss at http://localhost:${PORT}`);
});
