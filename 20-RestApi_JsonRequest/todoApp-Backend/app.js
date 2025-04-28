//core module
const path = require("path");

//external module
const express = require("express");
const { default: mongoose } = require("mongoose");

//local module
const rootDir = require("./utils/pathUtils");
const errorController=require('./controllers/error');

const db_path =
  "mongodb+srv://sagar389:sagar389@rentalcluster.zliqyrl.mongodb.net/todos?retryWrites=true&w=majority&appName=rentalCluster";

const app = express();

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::
app.use(express.static(path.join(rootDir,"public")));   // for styling i.e css used
// app.use(express.static("public")); // for styling i.e css used


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
