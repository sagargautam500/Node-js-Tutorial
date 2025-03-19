const fs = require("fs");

const RequestHandler = (req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>UserInputForm</title></head>");
    res.write("<body><h1>Enter Details</h1>");
    res.write('<form action="submit-details" method="POST">');
    res.write('<label for="name">Name:</label>');
    res.write(
      '<input type="text" id="name" name="Username"  placeholder="Enter your name.." ><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" >');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" >');
    res.write('<br><button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
    return;
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString(); //store chunk in buffor in string format
      const param = new URLSearchParams(fullBody); //give enties data from chunk
      const bodyObject = Object.fromEntries(param); //convert object from entires data
      const jsonString = JSON.stringify(bodyObject); //convert json format from object

      // fs.writeFileSync("userDetails1.txt", jsonString); //block everything
      fs.writeFile("userDetails3.txt", jsonString, (error) => {
        //async write file
        console.log("data are sucessfully write");
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    // res.setHeader('Content-Type','json');
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>UserInput</title></head>");
    res.write("<body><h1>Welcome To Backend Server</h1></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = RequestHandler; //export this handler function
