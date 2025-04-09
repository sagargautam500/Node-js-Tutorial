const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "addHome", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl,description } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl,description);
  home.save(); //save function call inside class Home

  res.render("host/addedHome", {
    registerHome: req.body,
    pageTitle: "Result",
    currentPage: "addHome",
  }); //send ejs file
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
