const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: String,
  thumbnail: String,
  product_gallery: String,
  description: String,
  base_price: Number,
  sell_price: Number,
  caregory_name: String,
  tags: String,
  additional_information: String

});

const productsModal = mongoose.model("products", productsSchema);

module.exports = productsModal;