exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn:false,
  });
};

exports.postLogin=(req,res,next)=>{
// console.log("data :",req.body)
// req.isLoggedIn=true;
// res.cookie('isLoggedIn',true)
req.session.isLoggedIn=true;
res.redirect('/');
}
exports.postLogout=(req,res,next)=>{
// res.cookie('isLoggedIn',false)
// req.session.isLoggedIn=false; 
req.session.destroy(()=>{
  res.redirect('/login');
})
}
