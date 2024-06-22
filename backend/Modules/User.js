const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name:String,
  email:String,
  mobile:String,
});

module.exports = mongoose.model("users",usersSchema);

