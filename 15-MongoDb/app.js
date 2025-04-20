//external module
// const bodyParser = require("body-parser");
const express = require("express");

//local module
const errorController = require("./controllers/error");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");

//just testing code .............
// const db=require('./utils/database');

// db.execute("SELECT * FROM homes")
// // .then(result=>console.log(result))//both rows and fields are show
// .then(([rows,fields])=>{
// console.log("rows:",rows)  //return array consist actual data in the form of object 
// console.log("fields:",fields) //return array consist of datatype of our data
// })
// .catch(err=>console.log("error occur while fetch data from database:",err))
//..........................................

const app = express();

app.set("view engine", "ejs");  
app.set("views", "views"); 

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::

app.use(express.static("public")); // for styling i.e css used

app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorController.get404); 

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at address http://localhost:${PORT}`);
});
