// const Favourite = require("../models/Favourite");
const Home = require("../models/home");
const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  // console.log("session:",req.session);
  Home.find().then((registerHome) => {
    res.render("store/index", {
      registerHome,
      pageTitle: "home rental",
      currentPage: "index",
      // isLoggedIn:req.isLoggedIn,
      isLoggedIn:req.session.isLoggedIn,
      user:req.session.user,
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
      user:req.session.user,
    });
  });
};



exports.getFavourite = async(req, res, next) => {
  const userId=req.session.user._id;
  const user= await User.findById(userId).populate('favourites');
         // console.log('user',user)
      res.render("store/favouriteList", {
        favouriteHomes: user.favourites,
        pageTitle: "FavouriteList",
        currentPage: "favourite",
        // isLoggedIn:req.isLoggedIn,
        isLoggedIn:req.session.isLoggedIn,
        user:req.session.user,
      });
    
};

exports.postFavourite = async(req, res, next) => {
  // console.log("favourite:",req.body)
  const homeId = req.body.id;
  const userId=req.session.user._id;
  const user= await User.findById(userId);

  if(!user.favourites.includes(homeId)){
    user.favourites.push(homeId)
    await user.save()
  }
    res.redirect("/favourite");
};

exports.postDeleteFavourite = async(req, res, next) => {
  const homeId = req.params.homeId;
  // console.log("delete home id=",homeId);
  const userId=req.session.user._id;
  const user= await User.findById(userId);
  
  if(user.favourites.includes(homeId)){
    user.favourites=user.favourites.filter(favId=>favId!=homeId)
    await user.save();
  }
      res.redirect("/favourite");
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
        user:req.session.user,
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
    user:req.session.user,
  });
};
