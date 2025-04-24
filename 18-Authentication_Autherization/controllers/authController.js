const {check, validationResult}=require('express-validator')

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  // console.log("data :",req.body)
  req.session.isLoggedIn = true;
  res.redirect("/");
};
exports.postLogOut = (req, res, next) => {
  // req.session.isLoggedIn=false;
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    currentPage: "signup",
    isLoggedIn: false,
  });
};


exports.postSignUp = [
  check('firstName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First name should be at least 2 characters long')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('First name should contain only alphabets'),

  check('lastName')
    .trim()
    .matches(/^[A-Za-z\s]*$/)
    .withMessage('Last name should contain only alphabets'),

  check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[\W_]/)
    .withMessage('Password must contain at least one special character'),

  check('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  check('userType')
    .isIn(['host', 'guest'])
    .withMessage('User type must be either "host" or "guest"'),

  check('terms')
    .equals('true')
    .withMessage('You must accept the terms and conditions'),

  (req, res, next) => {
    const{firstName,lastName,email,password,userType}=req.body;
    const errors=validationResult(req);
    // console.log('error:',errors)

    if(!errors.isEmpty()){
      res.render("auth/signup", {
        pageTitle: "SignUp",
        currentPage: "signup",
        isLoggedIn: false,
        errors:errors.array().map(err=>err.msg),
        oldInput:{firstName,lastName,email,password,userType}
      });
    }
    res.redirect("/login");
  }
];
