const Reviews = require("../models/reviews");

exports.createReview = async (req, res) => {
  const { star, position, comment, name } = req.body;
  const { image } = req.files;

  if (!star || !position || !comment || !name) {
    return res.status(400).send('All fields are required');
  }

  if (!image) return res.status(400).send('No image provided');

  const imagePath = `/uploads/ourPlacements/${image[0].originalname}`;

  const reviewObj = {
    star,
    position,
    comment,
    image: imagePath,
    name
  };

  try {
    const data = await new Reviews(reviewObj).save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getReviews = async (req, res) => {
  try {
    const result = await Reviews.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
