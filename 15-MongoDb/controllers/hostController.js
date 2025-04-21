const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/editHome", {
    pageTitle: "addHome",
    currentPage: "addHome",
    editing: false,
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );

  home.save().then(() => console.log("home add successfully"));
  res.redirect("/host/host-homes");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  // console.log(req.body)
  try {
    const home = new Home(
      id,
      houseName,
      price,
      location,
      rating,
      photoUrl,
      description
    );
    home.save().then((result) => {
      console.log("Home edited", result);
    });
    res.redirect("/host/host-homes");
  } catch (err) {
    console.error("❌ Failed to update home:", err);
    res.status(500).send("Something went wrong while updating home.");
  }
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("host/hostHomeList", {
      registerHome,
      pageTitle: "hostHome",
      currentPage: "hostHome",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  // console.log(homeId,editing);
  Home.fetchSingleData(homeId).then((home) => {
    if (!home) {
      console.log("home not found for editing !");
      return res.redirect("/host/host-homes");
    }
    res.render("host/editHome", {
      home: home,
      pageTitle: "editHome",
      currentPage: "hostHome",
      editing: editing,
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  Home.fetchDeleteData(homeId)
    .then(() => {
      res.redirect("/host/host-homes");
    })
    .catch((err) => {
      console.log("error occur while delete home", err);
    });
};
