const mongoose = require("mongoose");

const tagsSchema = mongoose.Schema({
  name: String,
  slug: String,

});

const tagsModal = mongoose.model("tags", tagsSchema);

module.exports = tagsModal;
