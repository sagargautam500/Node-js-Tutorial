//core module
const path = require("path");

//external module
const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const multer = require("multer");

//local module
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");

const db_path =
  "mongodb+srv://sagar389:sagar389@rentalcluster.zliqyrl.mongodb.net/homerental?retryWrites=true&w=majority&appName=rentalCluster";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); //direct use urlencoded from express::
// app.use(express.static(path.join(rootDir,"public")));   // for styling i.e css used
app.use(express.static("public")); // for styling i.e css used
// app.use('/uploads',express.static("uploads"));   // for upload folder images are public
app.use("/uploads", express.static(path.join(rootDir, "uploads")));
app.use("/host/uploads", express.static(path.join(rootDir, "uploads")));
app.use("/homes/uploads", express.static(path.join(rootDir, "uploads")));

const uploadCombined = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, file.fieldname === "photo" ? "uploads/photos" : "uploads/rules");
    },
    filename: (req, file, cb) => {
      if (file.fieldname === "photo") {
        cb(null, `temp-photo-${Date.now()}${path.extname(file.originalname)}`);
      } else if (file.fieldname === "rules") {
        cb(null, `temp-rules-${Date.now()}${path.extname(file.originalname)}`);
      }
    },
  }),

  fileFilter: (req, file, cb) => {
    if (file.fieldname === "photo") {
      return ["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype)
        ? cb(null, true)
        : cb(new Error("Only images allowed"), false);
    }
    // console.log(file);
    if (file.fieldname === "rules") {
      return file.mimetype === "application/pdf"
        ? cb(null, true)
        : cb(new Error("Only PDFs allowed"), false);
    }
    cb(new Error("Unexpected field"), false);
  },
});

app.use(
  uploadCombined.fields([
    { name: "photo", maxCount: 1 },
    { name: "rules", maxCount: 1 },
  ])
);

const store = new MongoDBStore({
  uri: db_path,
  collection: "sessions",
});

app.use(
  session({
    //session middleware used
    secret: "home rental project",
    resave: false,
    saveUninitialized: true,
    store,
  })
);

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.session.isLoggedIn) {
    //..........only login then access to view
    next();
  } else {
    res.redirect("/login");
  }
});
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
