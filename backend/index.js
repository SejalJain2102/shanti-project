const express = require("express");   
const cors = require("cors");
const app = express();
app.use(express.json());

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
const Users = require("./Modules/User");

app.post("/", async(req,res)=>{
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
})

const PORT = 5000;

app.listen(PORT,()=>{
  console.log(`port run on http://localhost:${5000}`);
})