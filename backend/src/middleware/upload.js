// src/middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads/blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up the Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Directory to save images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
