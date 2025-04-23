exports.get404 = (req, res, next) => {
  res.status(404).render("404", { 
    pageTitle: "not found" ,
    // isLoggedIn:req.isLoggedIn
    isLoggedIn:req.session.isLoggedIn,
  });
};
