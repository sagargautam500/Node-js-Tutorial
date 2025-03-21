//core module
const path=require('path');

//external module
// const bodyParser = require("body-parser");
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir=require('./utils/pathUtils');

const app = express();

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::

app.use(express.static(path.join(rootDir,'public'))) // for styling i.e css used 

app.use(userRouter);
app.use("/host",hostRouter);
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'views','404.html') ); 
  res.status(404).sendFile(path.join(rootDir,'views','404.html') ); //add 404 functionality
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at address http://localhost:${PORT}`);
});
