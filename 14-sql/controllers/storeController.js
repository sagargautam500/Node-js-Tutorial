const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll()
  .then(([registerHome])=>{          //rows=registerHome,[rows,fields]
    res.render("store/index", {
      registerHome,
      pageTitle: "home rental",
      currentPage: "index",
    });
  })
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll()
  .then(([registerHome] )=> {
    res.render("store/homeList", {
      registerHome,
      pageTitle: "home Page",
      currentPage: "homes",
    });
  });
};

exports.getFavourite = (req, res, next) => {
  Favourite.getToFavourite((favourites) => {
    Home.fetchAll()
    .then( ([registerHome]) => {
      // Filter only homes that are in the favourites list
      const favouriteHomes = registerHome.filter(home => favourites.includes(home.id));
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
Favourite.addToFavourite(req.body.id,(err)=>{
  console.log("error occur:",err)
})
res.redirect("/favourite");
}

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  Favourite.fetchDeleteFavouriteData(homeId, (err) => {
    if (err) {
      console.log("error while delete:", err);
    }
    res.redirect("/favourite");
  });
};


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log(homeId);
  Home.fetchSingleData(homeId)
  .then(([homeFound]) => {
    const[home]=homeFound;
    // console.log(homeFound);
    // console.log(home);
    if (!homeFound) {
      res.redirect("/homes");
    } else {
      res.render("store/homeDetail", {
        home:home,
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
