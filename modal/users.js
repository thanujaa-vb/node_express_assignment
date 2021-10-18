const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  role: String,
  profile_image: String,
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
