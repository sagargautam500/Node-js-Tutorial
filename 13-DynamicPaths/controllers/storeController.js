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

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log(homeId);
  Home.fetchSingleData(homeId, (homeFound) => {
    // console.log(homeFound);
    if (!homeFound) {
      res.redirect("/homes");
    } else {
      res.render("store/homeDetail", {
        home:homeFound,
        pageTitle: "Home Details",
        currentPage: "homes",
      });
    }
  });
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking", {
    pageTitle: "booking page",
    currentPage: "booking",
  });
};
