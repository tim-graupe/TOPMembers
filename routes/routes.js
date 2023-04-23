var express = require("express");
var router = express.Router();
const index_controller = require("../controllers/indexController");
const signup_controller = require("../controllers/signupController");
const login_controller = require("../controllers/loginController");
const logout_controller = require("../controllers/logoutcontroller");
const newmessage_controller = require("../controllers/messageController");
//index / homepage
router.get("/", index_controller.index);

//sign up
router.get("/signup", signup_controller.signup_create_get);
router.post("/signup", signup_controller.signup_post);

//login
router.get("/login", login_controller.login_get);
router.post("/login", login_controller.login_post);

//logout
router.get("/logout", logout_controller.logout);

//new message
router.get("/newmessage", newmessage_controller.newmessage);

module.exports = router;
