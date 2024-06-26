const express = require("express");   
const cors = require("cors");
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
];

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

require("./db/connections");
const Users = require("./Models/User");
const OurPlacements = require("./Models/ourPlacements");
const Reviews = require("./Models/reviews");

// Create a Nodemailer transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhinaythresia@gmail.com',
    pass: 'obfn phfk rlho lxxd'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Submit form 
app.post("/", async (req, res) => {
  try {
    let user = new Users(req.body);
    let result = await user.save();
    
    // Email message options
    const mailOptions = {
      from: 'abhinaythresia@gmail.com',
      to: "abhinayarkb@gmail.com",
      subject: 'New User Registration',
      text: `New user registered:
             Name: ${req.body.name}
             Email: ${req.body.email}
             Mobile: ${req.body.mobile}
             Courses: ${req.body.courses}
             Currently You Are: ${req.body.currentlyYouAre}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Our placements post 
app.post("/ourPlacements", async (req, res) => {
  try {
    let ourPlacement = new OurPlacements(req.body);
    let result = await ourPlacement.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/get-ourPlacements", async (req, res) => {
  try {
    let result = await OurPlacements.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// review post 
app.post("/reviews", async (req, res) => {
  try {
    let review = new Reviews(req.body);
    let result = await review.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/get-reviews", async (req, res) => {
  try {
    let result = await Reviews.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
