const express = require("express");
const router = express.Router();
const User = require("../models/Users.js");

//Get All Todo routes
router.get("/", async (req, res) => {
  const user = await User.find();
  res.json(user);
});

//create new Todo
router.post("/new", async (req, res) => {
  // console.log(req)
  console.log(req.body)
  const newUser = new User(
    req.body // what the Vue App is sending
  );
  // console.log(newUser)
  const savedUser = await newUser.save();
  res.json(savedUser);
});

//Getter by id
router.get("/get/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.json(user);
});
//Delete a todo by id
router.delete("/delete/:id", async (req, res) => {
  const userDelete = await User.findByIdAndDelete({ _id: req.params.id });
  res.json(userDelete);
});
//Update a todo by id
router.put("/update/:id", async (req, res) => {
  // console.log(req.params)
  const userUpdate = await User.updateOne(
    { _id: req.params.id } ,
     { $set: req.body }
    // {
    //   author: "Bart",
    //   todo: "Skating",
    // }
  );
  res.json(userUpdate);
});

module.exports = router;
