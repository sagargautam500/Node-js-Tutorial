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

  home.save(); //save function call inside class Home
  res.redirect("/host/host-homes");
};

exports.postEditHome = (req, res, next) => {
  // console.log(req.body);
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );
  home.id = id;
  home.save(); //save function call inside class Home
  res.redirect("/host/host-homes");
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registerHome) => {
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
  Home.fetchSingleData(homeId, (home) => {
    // console.log(home)
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
  Home.fetchDeleteData(homeId, (err) => {
    if (err) {
      console.log("error while delete:", err);
    }
    res.redirect("/host/host-homes");
  });
};
