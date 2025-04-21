const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/index", {
      registerHome,
      pageTitle: "home rental",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/homeList", {
      registerHome,
      pageTitle: "home Page",
      currentPage: "homes",
    });
  });
};

exports.getFavourite = (req, res, next) => {
  Favourite.getToFavourite().then((favouritesList) => {
    const favourites = favouritesList.map((fave) => fave.homeId);
    // console.log('favourites',favourites);
    Home.fetchAll().then((registerHome) => {
      // console.log('registerHome',registerHome);
      // Filter only homes that are in the favourites list
      const favouriteHomes = registerHome.filter((home) =>
        favourites.includes(home._id.toString())
      );
      // Render the favourite list view
      res.render("store/favouriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "FavouriteList",
        currentPage: "favourite",
      });
    });
  });
};

exports.postFavourite = (req, res, next) => {
  // console.log("favourite:",req.body)
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("error occur:", err);
    })
    .finally(() => {
      res.redirect("/favourite");
    });
};

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  Favourite.fetchDeleteFavouriteData(homeId)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("error occur while delete data:", err);
    })
    .finally(() => {
      res.redirect("/favourite");
    });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log(homeId);
  Home.fetchSingleData(homeId).then((home) => {
    // console.log(home);
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("store/homeDetail", {
        home: home,
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
