//external module
const express = require("express");

//local module
const errorController = require("./controllers/error");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");
const session = require("express-session");
const MongoDBStore  = require("connect-mongodb-session")(session);


const db_path =
  "mongodb+srv://sagar389:sagar389@rentalcluster.zliqyrl.mongodb.net/homerental?retryWrites=true&w=majority&appName=rentalCluster";


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::

app.use(express.static("public")); // for styling i.e css used


const store=new MongoDBStore({
  uri:db_path,
  collection:'sessions',
})

app.use(session({               //session middleware used
  secret:'home rental project',
  resave:false,
  saveUninitialized:true,
  store,
}))

app.use(authRouter);
app.use(storeRouter);
app.use('/host',(req,res,next)=>{
if(req.session.isLoggedIn){   //..........only login then access to view 
  next()
}else{
  res.redirect('/login');
}
})
app.use("/host", hostRouter);
app.use(errorController.get404);

const PORT = 3001;

mongoose
  .connect(db_path)
  .then(() => {
    console.log("Database Connected...");
    app.listen(PORT, () => {
      console.log(`Server running at address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error Occur while connect to database:", err);
  });
