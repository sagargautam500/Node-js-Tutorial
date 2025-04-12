//external module
// const bodyParser = require("body-parser");
const express = require("express");

//local module
const errorController = require("./controllers/error");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");

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
