const Blogs = require('../models/blogs');
const path = require('path');

exports.createBlog = async (req, res) => {
  const { heading, paragraph, createdby } = req.body;
  const { image } = req.files;

  console.log('Request body:', req.body); // Debugging line
  console.log('Uploaded files:', req.files); // Debugging line

  if (!heading || !paragraph || !createdby) {
    return res.status(400).send('All fields are required');
  }

  if (!image || image.length === 0) return res.status(400).send('No image provided');

  const imagePath = `/uploads/blogs/${image[0].filename}`;
  console.log('Image path:', imagePath); // Debugging line
  const currentDate = new Date().toISOString();

  const blogObj = {
    image: imagePath,
    heading,
    paragraph,
    createdby,
    date: currentDate
  };

  try {
    const data = await new Blogs(blogObj).save();
    res.status(201).send(data);
  } catch (error) {
    console.log('Error saving blog:', error); // Debugging line
    res.status(500).send(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const result = await Blogs.find();
    res.send(result);
  } catch (error) {
    console.log('Error getting blogs:', error); // Debugging line
    res.status(500).send(error);
  }
};
