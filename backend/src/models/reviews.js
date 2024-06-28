const mongoose = require("mongoose");

// our review post 
const reviewsSchema = new mongoose.Schema({

  star: String,
  postion: String,
  comment: String,
  image: String,
  name: String,
  
  
});

module.exports = mongoose.model("reviews", reviewsSchema);