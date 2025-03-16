const handleCalculator = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Calculator page</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome to Calculator Section</h1>");
  res.write("<form action='/calculate-result' method='POST'>");
  res.write("<label for='firstNumber'>First Number: </label>");
  res.write(
    "<input type='text' id='firstNumber' name='firstNumber'placeholder='enter first number' required>"
  );
  res.write("<br><label for='secondNumber'>Second Number: </label>");
  res.write(
    "<input type='text' id='secondNumber' name='secondNumber'placeholder='enter second number' required>"
  );
  res.write("<br><button type='submit'>Sum</button>");
  res.write("</form><br>");
  res.write('<a href="/">Back to Home Page</a>');
  res.write("</body>");
  res.write("</html>");
  return res.end();
};
module.exports.handleCalculator = handleCalculator;
