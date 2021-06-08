const mongoose = require("mongoose");
const wishlist_schema = new mongoose.Schema({
  id: String,
  link: String,
  title: String,
  pic: String,
  courseFooter: String,
  price: String,
});

module.exports = mongoose.model("wishlists", wishlist_schema);
