const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
  title: { type: String, required: true, minLength: 1, maxLength: 24 },
  message: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date_posted: { type: Date, default: Date.now },
});

MessageSchema.virtual("url").get(function () {
  return DateTime.fromJSDate(this.date_posted).toLocaleString(
    DateTime.DATETIME_MED
  );
});

MessageSchema.virtual("date_posted_formatted").get(function () {
  return DateTime.fromJSDate(this.date_posted).toISODate();
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
