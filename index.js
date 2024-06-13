const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const postModel = require("./models/post");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/data-ass")
  .then(() => console.log("succesfully connected to MonogDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "ishan",
    age: 22,
    email: "ishan@ishan",
  });
  return res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "post data",
    user: "666b09832de1fbc7fa11524a",
  });

  let user = await userModel.findOne({ _id: "666b09832de1fbc7fa11524a" });
  user.posts.push(post._id);
  await user.save();
  return res.send({ user, post });
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
