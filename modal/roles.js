const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema({
  name: String,
  slug: String,

});

const rolesModal = mongoose.model("roles", rolesSchema);

module.exports = rolesModal;
