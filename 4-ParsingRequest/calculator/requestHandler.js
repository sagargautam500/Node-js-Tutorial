const { handleCalculator } = require("./calculatorHandler");
const { sumRequestHandler } = require("./sumHandler");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Calculator Home page</h1>");
    res.write('<a href="/calculator">Go to Calculator</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    return handleCalculator(req, res);
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(res, req);
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Calculator</title></head>");
  res.write("<body>");
  res.write("<h1>404 Page Not Found</h1>");
  res.write('<a href="/">Go to Calculator Home</a>');
  res.write("</body>");
  res.write("</html>");
  res.end();
};
module.exports = requestHandler;
