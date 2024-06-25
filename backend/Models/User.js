const mongoose = require("mongoose");



// submit form 
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  courses: {
    type: String, // Expecting an array of strings
    enum: ["Nodejs", "Python", "Reactjs", "DigitalMarketing"],
    default: "Reactjs"
  },
  currentlyYouAre: {
    type: String,
    enum: ["Student", "Trainer", "Working"],
    default: "Student"
  }
});

module.exports = mongoose.model("users", usersSchema);



