const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

require("./src/db/connections");

const userRoutes = require("./src/routes/users");
const placementRoutes = require("./src/routes/placements");
const reviewRoutes = require("./src/routes/reviews");
const blogRoutes = require("./src/routes/blogRouters");

// Routes
app.use(userRoutes);
app.use(placementRoutes);
app.use(reviewRoutes);
app.use(blogRoutes);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static(staticDir));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
