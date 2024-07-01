const express = require('express');
const mongoose = require('mongoose');
const placementRoutes = require('./routes/placementRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.use('/api', placementRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
