const mongoose = require("mongoose");

// our placements post 
const ourPlacementsSchema = new mongoose.Schema({
  name: String,
  // image: String,
  package: String,
  position: String,
  // companyLogo: String,
  
  
});

module.exports = mongoose.model("ourPlacements", ourPlacementsSchema);