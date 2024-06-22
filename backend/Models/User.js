const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  courses: {
    type: [String], // Expecting an array of strings
    enum: ["nodeJs", "python", "reactJs", "digitalMarketing"],
    default: ["reactJs"]
  },
  currentlyYouAre: {
    type: String,
    enum: ["student", "Trainer", "working"],
    default: "student"
  }
});

module.exports = mongoose.model("users", usersSchema);
