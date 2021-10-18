const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  description: String

});

const categoriesModal = mongoose.model("categories", categoriesSchema);

module.exports = categoriesModal;
