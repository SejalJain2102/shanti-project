const mongoose = require("mongoose");

const ourPlacementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  package: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String, required: true },
  companyLogo: { type: String, required: true }
});

const OurPlacements = mongoose.model("OurPlacements", ourPlacementSchema);

module.exports = OurPlacements;
