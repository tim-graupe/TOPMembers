const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
exports.message_create_get = (req, res, next) => {
  res.render("newmessage", { title: "Hello from new message controller" });
};

exports.newmessage_post = [
  body("title", "Title required!")
    .trim()
    .isLength({ min: 1, max: 24 })
    .escape()
    .withMessage("Title must be between 1-24 chars"),
  body("message")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .escape()
    .withMessage("Message must be between 1-1000 chars"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("messages", {
        title: req.body.title,
        message: req.body.message,
        // admin: req.body.admin,
        user: req.user._id,
      });
      return;
    }
    const message = new Message({
      title: req.body.title,
      message: req.body.message,
      // admin: req.body.admin,
      user: req.user._id,
      //user req.body.username (remember to switch user: { type: Schema.Types.ObjectId, ref: "User", required: true } in the message module to String)
      timestamp: Date.now(),
    });
    await message.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  },
];
