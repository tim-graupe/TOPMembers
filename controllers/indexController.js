const Messages = require("../models/message");
const asyncHandler = require("express-async-handler");

exports.index = async (req, res, next) => {
  const messages = await Messages.find().populate("user").exec();

  res.render("index", {
    title: "Sekret Klub",
    messages: messages,
    user: req.user,
  });
};

exports.delete_message = async (req, res, next) => {
  const messages = await Messages.find().populate("user").exec();

  Messages.findByIdAndRemove(messages, function (err, docs) {
    if (err) {
      console.log("error:" + err);
      res.redirect("/");
    } else {
      console.log(messages + " removed!");
      res.redirect("/");
    }
  });
};
