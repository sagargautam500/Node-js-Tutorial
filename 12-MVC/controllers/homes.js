const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "addHome", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  // console.log(req.body)
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  // const home=new Home(req.body.houseName,req.body.price,req.body.location,req.body.rating,req.body.photoUrl); //new object create
  home.save(); //save function call inside class Home

  res.render("addedHome", {
    registerHome: req.body,
    pageTitle: "Result",
    currentPage: "addHome",
  }); //send ejs file
};

exports.getHomes = (req, res, next) => {
  // const registerHome=Home.fetchAll();
  // res.render("home", {
  //   registerHome,
  //   pageTitle: "home page",
  //   currentPage: "home",
  // });

  

  Home.fetchAll((registerHome) => {
    res.render("home", {
      registerHome,
      pageTitle: "home Page",
      currentPage: "home",
    });
  });
};
