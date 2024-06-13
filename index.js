const express = require("express");
const mongoose = require('mongoose');
const userModel = require('./models/user');
const postModel = require('./models/post');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/data-ass').then(()=>console.log('succesfully connected to MonogDB')).catch((err)=>console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
