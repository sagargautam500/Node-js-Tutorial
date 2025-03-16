const sumRequestHandler = (res, req) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const param = new URLSearchParams(fullBody);
    console.log(fullBody);
    console.log(param);

    const bodyObject = Object.fromEntries(param); // convert object
    console.log(bodyObject);
    const num1 = parseFloat(bodyObject.firstNumber);
    const num2 = parseFloat(bodyObject.secondNumber);

    // const num1=parseFloat(param.get("firstNumber"));
    // const num2=parseFloat(param.get("secondNumber"));
    console.log(num1, num2);
    const sum = num1 + num2;

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Calculator Result Page</h1><br>");
    res.write(
      `<p>The sum of ${num1} and ${num2} is: <strong>${sum}</strong></p>`
    );
    res.write('<a href="/calculator">Back to  Calculator</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  });
};
module.exports.sumRequestHandler = sumRequestHandler;
