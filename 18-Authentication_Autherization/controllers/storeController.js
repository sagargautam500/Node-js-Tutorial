const Favourite = require("../models/Favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  // console.log("session:",req.session);
  Home.find().then((registerHome) => {
    res.render("store/index", {
      registerHome,
      pageTitle: "home rental",
      currentPage: "index",
      // isLoggedIn:req.isLoggedIn,
      isLoggedIn:req.session.isLoggedIn,
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/homeList", {
      registerHome,
      pageTitle: "home Page",
      currentPage: "homes",
      // isLoggedIn:req.isLoggedIn,
      isLoggedIn:req.session.isLoggedIn,
    });
  });
};

/*
exports.getFavourite = (req, res, next) => {
  Favourite.find().then((favouritesList) => {
    const favourites = favouritesList.map((fave) => fave.homeId.toString());
    // console.log('favourites',favourites);
    Home.find().then((registerHome) => {
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
*/

exports.getFavourite = (req, res, next) => {
  Favourite.find().populate('homeId') .then((favouritesList) => {
    // console.log('favouritesList',favouritesList);
    const favouriteHomes = favouritesList.map((fav) => fav.homeId);
    // console.log('favourites',favouriteHomes);
      // Render the favourite list view
      res.render("store/favouriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "FavouriteList",
        currentPage: "favourite",
        // isLoggedIn:req.isLoggedIn,
        isLoggedIn:req.session.isLoggedIn,
      });
    });
};

exports.postFavourite = (req, res, next) => {
  // console.log("favourite:",req.body)
  const homeId = req.body.id;
  Favourite.findOne({ homeId: homeId }).then((existFav) => {
    if (existFav) {
      console.log("already exists favourite list..");
    } else {
      const fav = new Favourite({ homeId });
      fav
        .save()
        .then((result) => {
          console.log("Favourite homeId add:", result);
        })
        .catch((err) => {
          console.log("error occur:", err);
        });
    }
    res.redirect("/favourite");
  });
};

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  Favourite.findOneAndDelete({ homeId: homeId }) //Favourite.deleteOne({ homeId: homeId })
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
  Home.findById(homeId).then((home) => {
    // console.log(home);
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("store/homeDetail", {
        home: home,
        pageTitle: "Home Details",
        currentPage: "homes",
        // isLoggedIn:req.isLoggedIn,
        isLoggedIn:req.session.isLoggedIn,
      });
    }
  });
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking", {
    pageTitle: "booking page",
    currentPage: "booking",
    // isLoggedIn:req.isLoggedIn,
    isLoggedIn:req.session.isLoggedIn,
  });
};
