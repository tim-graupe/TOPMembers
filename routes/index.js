var express = require("express");
var router = express.Router();
const index_controller = require("../controllers/indexController");
/* GET home page. */
router.get("/", index_controller.index);
router.post("/", index_controller.delete_message);
module.exports = router;
