const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const passport = require("passport");
const session = require("express-session");
const express = require("express");
const LocalStrategy = require("passport-local").Strategy;

exports.login_get = (req, res) => {
  // If user is already logged in, redirect them to the homepage
  if (res.locals.currentUser) return res.redirect("/");
  res.render("loginForm", { user: req.user });
};

exports.login_post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.use(function (req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});
