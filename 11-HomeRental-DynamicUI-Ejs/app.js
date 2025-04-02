//core module
const path=require('path');

//external module
// const bodyParser = require("body-parser");
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
// const rootDir=require('./utils/pathUtils');           //not required in this case  now:::

const app = express();

app.set('view engine','ejs');
app.set('views','views');

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::

// for styling i.e css used 
app.use(express.static('public'));  

app.use(userRouter);
app.use("/host",hostRouter);
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'views','404.html') ); 
  // res.status(404).sendFile(path.join(rootDir,'views','404.html') ); //add 404 functionality
  res.status(404).render('404',{pageTitle:'not found'} ); 
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at address http://localhost:${PORT}`);
});
