const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  users_id: Number,
  total_items: Number,
  products: Array,
  billing_address: String,
  shipping_address: String,
  transaction_status: String,
  payment_mode: String,
  payment_status: String,
  order_status: String

});

const ordersModal = mongoose.model("orders", ordersSchema);

module.exports = ordersModal;
