const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/index", {
      registerHome,
      pageTitle: "home rental",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  // const registerHome=Home.fetchAll();
  // res.render("home", {
    //   registerHome,
    //   pageTitle: "home page",
    //   currentPage: "home",
    // });
    
    Home.fetchAll((registerHome) => {
      res.render("store/homeList", {
        registerHome,
        pageTitle: "home Page",
        currentPage: "homes",
      });
    });
  };
  
  
  exports.getFavourite = (req, res, next) => {
    Home.fetchAll((registerHome) => {
      res.render("store/favouriteList", {
        registerHome,
        pageTitle: "FavouriteList",
        currentPage: "favourite",
      });
    });
  };


exports.getBooking=(req,res,next)=>{
res.render('store/booking',{pageTitle:"booking page",currentPage:"booking"})
}
