const Users = require("../models/users");
const transporter = require("../config/nodemailer");

exports.createUser = async (req, res) => {
  try {
    const user = new Users(req.body);
    const result = await user.save();
    
    // Email message options
    const mailOptions = {
      from: process.env.EMAIL_USER,
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
};
