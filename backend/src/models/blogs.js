const mongoose = require('mongoose');

// Blog post schema
const blogSchema = new mongoose.Schema({
  image: String,
  heading: String,
  paragraph: String,
  createdby: String,
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
