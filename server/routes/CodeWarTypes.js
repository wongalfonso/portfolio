const express = require("express");
const router = express.Router();
const Blog = require("../models/CodeWarTypes");

router.get("/", (req,res) => {
  Blog.find({}).then(kyus => {
    res.status(200).json(kyus);
  })
})



module.exports = router;