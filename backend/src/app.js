const express = require('express');
const path = require('path');
const app = express();

// Middleware for parsing request body and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Import routes
const blogRoutes = require('./src/routes/blogRoutes');
app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
