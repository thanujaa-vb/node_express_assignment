const mongoose = require("mongoose");

const cartsSchema = mongoose.Schema({
  product: String,
  user: String,
  product_qty: Number,
  base_price: Number,
  sell_price: Number,
  Total_price: Number

});

const cartsModal = mongoose.model("carts", cartsSchema);

module.exports = cartsModal;
