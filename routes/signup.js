var express = require("express");
var router = express.Router();
const signup_controller = require("../controllers/signupController");
router.get("/", function (req, res, next) {
  res.render("signup");
});
router.post("/", signup_controller.signup_post);
module.exports = router;
