const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
    errorMsg: [],
    oldInput: {},
    user:{},
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email:email });
    // console.log('user',user)
    if (!user) {
      return res.status(422).render("auth/login", {
        pageTitle: "Login",
        currentPage: "login",
        isLoggedIn: false,
        errorMsg: ['User does not exist!'],
        oldInput: { email },
        user:{},
      });
    }

    // Password check (add this block)
    const doMatch = await bcrypt.compare(password, user.password);
    if (!doMatch) {
      return res.status(422).render("auth/login", {
        pageTitle: "Login",
        currentPage: "login",
        isLoggedIn: false,
        errorMsg: ['Incorrect password!'],
        oldInput: { email },
        user:{},
      });
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    return req.session.save(() => {
      res.redirect("/");
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: false,
      errorMsg: ['Something went wrong. Please try again later.'],
      oldInput: { email },
      user:{},
    });
  }
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
    errorMsg: [],
    oldInput: {},
    user:{},
  });
};

exports.postSignUp = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name should be at least 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name should contain only alphabets"),

  check("lastName")
    .trim()
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Last name should contain only alphabets"),

  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[\W_]/)
    .withMessage("Password must contain at least one special character"),

  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),

  check("userType")
    .isIn(["host", "guest"])
    .withMessage('User type must be either "host" or "guest"'),

  check("terms")
    .equals("on")
    .withMessage("You must accept the terms and conditions"),

  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const results = validationResult(req);

    /*
    console.log('error:',results)
    console.log('array of error:',results.array())//give array of result which name is errors
    results.array().map(err=>
     console.log("error message:",err.msg) //every msg in error array:results.array()=errors array,err=object
    )
    */

    if (!results.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "SignUp",
        currentPage: "signup",
        isLoggedIn: false,
        errorMsg: results.array().map((errObj) => errObj.msg),
        oldInput: { firstName, lastName, email, password, userType },
        user:{},
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword, // Use the hashed password!
          userType,
        });
        return user.save();
      })
      .then(() => {
        return res.redirect("/login"); // Use return for consistency
      })
      .catch((err) => {
        // console.error("Signup error:", err); // Optional: log error for debugging
        return res.status(500).render("auth/signup", {
          pageTitle: "SignUp",
          currentPage: "signup",
          isLoggedIn: false,
          errorMsg: [err.message],
          oldInput: { firstName, lastName, email, password, userType },
          user:{},
        });
      });
  },
];

exports.getTerms=(req,res,next)=>{
res.render("auth/terms",{
  pageTitle: "TermsAndCondition",
  currentPage: "",
  isLoggedIn: false,
  user:{},
})
}
