const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, minLength: 2, maxLength: 24 },
  password: { type: String, required: true, minLength: 6 },
  admin: { type: String, required: false },
  member: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
