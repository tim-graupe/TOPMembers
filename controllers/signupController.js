const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup_create_get = (req, res, next) => {
  res.render("signup");
};

exports.signup_post = [
  body("username", "Username required!")
    .trim()
    .isLength({ min: 2, max: 24 })
    .escape(),
  body("password").trim().isLength({ min: 6 }).escape(),
  async (req, res, next) => {
    const errors = validationResult(req);
    let desiredName = await User.findOne({ username: req.body.username });
    if (desiredName) {
      return res.render("signup", { userError: "User Already Exists" });
    }
    if (!errors.isEmpty() && !desiredName) {
      res.render("signup", {
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
        member: req.body.member ? true : false,
      });
      return;
    }
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin,
      member: req.body.member ? true : false,
    });
    bcrypt.hash(req.body.password, 10, (err, hashedPwd) => {
      if (err) return next(err);
      user.password = hashedPwd;
      user.save((err) => {
        if (err) return next(err);
        res.redirect("/");
      });
    });
    // user.save((err) => {
    //   if (err) {
    //     return next(err);
    //   }
    //   res.redirect("/");
    // });
  },
];
