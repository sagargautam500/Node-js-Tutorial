const fs = require("fs");

const userRequestHandler = (req, res) => {
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
  }
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const param = new URLSearchParams(fullBody);
      console.log(param);
      // const bodyObject = {};
      // for (const [key, val] of param.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(param); //convert object from entires data
      console.log(bodyObject);
      // const jsonString=JSON.stringify(bodyObject);
      const jsonString = JSON.stringify({
        //convert object to Json
        msg: "hlp data are available",
        obj: bodyObject,
      });
      console.log(jsonString);
      fs.writeFileSync("userDetails.txt", jsonString); //it block everything

      //just for practice::
      const convertDataObject = JSON.parse(jsonString); //convert  json  to object i.e original data
      console.log(convertDataObject);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  // res.setHeader('Content-Type','json');
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>UserInput</title></head>");
  res.write("<body><h1>Welcome To Backend Server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userRequestHandler; //export this handler function
