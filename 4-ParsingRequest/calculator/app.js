// Create a Calculator
// 1. Create a new Node.js project named “Calculator”.
// 2. On the home page (route "/"), show a welcome message and a link to the calculator page.
// 3. On the "/calculator" page, display a form with two input fields and a "Sum" button.
// 4. When the user clicks the “Sum” button, they should be taken to the ❝/calculate-result" page, which shows the sum of the two  numbers.

// Make sure the request goes to the server:::
// Create a separate module for the addition function. 
// Create another module to handle incoming requests. 
// On the "/calculate-result" page, parse the user input, use the addition module to calculate the sum, and 
// display the result on a new HTML page.

const http = require("http");
const handleRequest = require("./requestHandler");

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log("Sever Running at adress http://localhost:3000");
});
