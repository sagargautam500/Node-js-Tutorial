const registerHome = [];

exports.getAddHoome = (req, res, next) => {
  res.render("addHome", { pageTitle: "addHome", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
  // const houseName=req.body.houseName;
  // registerHome.push({houseName:houseName,})
  registerHome.push(req.body); //push js object

  res.render("addedHome", {
    registerHome: req.body,
    pageTitle: "Result",
    currentPage: "addHome",
  }); //send ejs file
};

exports.getHomes = (req, res, next) => {
  res.render("home", {
    registerHome,
    pageTitle: "home page",
    currentPage: "home",
  });
};

exports.registerHome = registerHome;
