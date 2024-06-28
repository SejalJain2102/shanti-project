const Blogs = require('../models/blogs');

exports.createBlog = async (req, res) => {
  const { heading, paragraph, createdby } = req.body;
  const { image } = req.files;

  if (!heading || !paragraph || !createdby) {
    return res.status(400).send('All fields are required');
  }

  if (!image) return res.status(400).send('No image provided');

  const imagePath = `/uploads/blogs/${image[0].originalname}`;
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
    res.status(500).send(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const result = await Blogs.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
