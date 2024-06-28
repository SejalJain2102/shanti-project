const express = require("express");
const upload = require("../middleware/upload");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.post("/blogs", upload.fields([{ name: 'image', maxCount: 1 }]), blogController.createBlog);
router.get("/get-blogs", blogController.getBlogs);

module.exports = router;
