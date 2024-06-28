const express = require("express");
const upload = require("../middleware/upload"); 
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/reviews", upload.fields([{ name: 'image', maxCount: 1 }]), reviewController.createReview);
router.get("/get-reviews", reviewController.getReviews);

module.exports = router;
