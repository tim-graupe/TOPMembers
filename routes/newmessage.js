var express = require("express");
var router = express.Router();
const messageController = require("../controllers/messageController");
router.get("/", function (req, res, next) {
  res.render("newmessage", { title: "Hello from new message", user: req.user });
});

router.post("/", messageController.newmessage_post);

module.exports = router;
