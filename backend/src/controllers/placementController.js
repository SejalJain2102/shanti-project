const OurPlacements = require("../models/ourPlacement");

exports.createPlacement = async (req, res) => {
  const { name, package, position } = req.body;
  const { image, companyLogo } = req.files;

  if (!name || !package || !position) {
    return res.status(400).send('All fields are required');
  }

  if (!image) return res.status(400).send('No image provided');
  if (!companyLogo) return res.status(400).send('No company logo provided');

  const imagePath = `/uploads/ourPlacements/${image[0].originalname}`;
  const companyLogoPath = `/uploads/ourPlacements/${companyLogo[0].originalname}`;

  const ourPlacementObj = {
    name,
    package,
    position,
    image: imagePath,
    companyLogo: companyLogoPath
  };

  try {
    const data = await new OurPlacements(ourPlacementObj).save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPlacements = async (req, res) => {
  try {
    const result = await OurPlacements.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
