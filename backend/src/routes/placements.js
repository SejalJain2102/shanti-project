const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const placementController = require("../controllers/placementController");

router.post("/ourPlacements", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'companyLogo', maxCount: 1 }]), placementController.createPlacement);
router.get("/get-ourPlacements", placementController.getPlacements);

module.exports = router;
