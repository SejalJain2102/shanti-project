const express = require("express");   
const cors = require("cors");
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());
// app.use(cors());
const allowedOrigins = [
  // "http://49.13.221.129:4000",
  "http://localhost:5173",
  // "http://localhost:3000",
  // "https://project1-delta-dun.vercel.app",
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


// submit form 
app.post("/", async(req,res)=>{
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
})


// our placements post 
app.post("/ourPlacements", async(req,res)=>{
  let ourPlacement = new OurPlacements(req.body);
  let result = await ourPlacement.save();
  res.send(result);
})


app.get("/get-ourPlacements", async(rep,res)=>{
  let result = await OurPlacements.find();
  res.send(result);
})

// Create a Nodemailer transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhinayarkb@gmail.com',
    pass: 'Abhirama@2004'
  },
  tls: {
    rejectUnauthorized: false // Disable SSL verification (not recommended for production)
  }
});

// Email message options
const mailOptions = {
  from: 'abhinayark.@gmail.com', // Sender address (should be same as auth.user)
  subject: 'Submit Email', // Subject line
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});





const PORT = 5000;

app.listen(PORT,()=>{
  console.log(`port run on http://localhost:${PORT}`);
})