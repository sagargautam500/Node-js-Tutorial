const fs = require("fs");

const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/editHome", {
    pageTitle: "addHome",
    currentPage: "addHome",
    editing: false,
    // isLoggedIn:req.isLoggedIn,
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, description } = req.body;
  // console.log('file:',req.files);
  // console.log('photoFile:',req.files.photo[0].path);
  // console.log('ruleFile:',req.files.rules[0].path);
  if (!req.files.photo[0]) {
    return res.status(422).send("Images are not provide:");
  }
  
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    photo:req.files.photo[0].path,
    rules:req.files.rules[0].path,
    description,
  });

  home.save().then(() => console.log("home add successfully"));
  res.redirect("/host/host-homes");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, description } = req.body;
  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      if (req.files['photo']) {
        fs.unlink(home.photo, (err) => {
          if (err) {
            console.log("error occur while unlink photo ");
          }
        });
        home.photo = req.files.photo[0].path;
      }
      if (req.files['rules']) {
        fs.unlink(home.rules, (err) => {
          if (err) {
            console.log("error occur while unlink photo ");
          }
        });
        home.rules = req.files.rules[0].path;
      }
      home.description = description;
      home
        .save()
        .then((result) => {
          // console.log("home Updated:", result);
        })
        .catch((err) => {
          console.error("Failed to Update home:", err);
        });
    })
    .catch((err) => {
      console.error("Failed to Find home:", err);
      res.status(500).send("Something went wrong while updating home.");
    })
    .finally(() => {
      res.redirect("/host/host-homes");
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("host/hostHomeList", {
      registerHome,
      pageTitle: "hostHome",
      currentPage: "hostHome",
      // isLoggedIn:req.isLoggedIn,
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  // console.log(homeId,editing);
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found for editing !");
      return res.redirect("/host/host-homes");
    }
    res.render("host/editHome", {
      home: home,
      pageTitle: "editHome",
      currentPage: "hostHome",
      editing: editing,
      // isLoggedIn:req.isLoggedIn,
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  Home.findByIdAndDelete(homeId) //Home.deleteOne({_id:homeId})
    .then(() => {
      res.redirect("/host/host-homes");
    })
    .catch((err) => {
      console.log("error occur while delete home", err);
    });
};
