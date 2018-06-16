const express = require("express");
const router = express.Router();
const Blog = require("../models/Types");

router.get("/", (req, res) => {
  Blog.find().then((kyus) => {
    console.log(kyus);
    res.status(200).json(kyus);
  })
})



module.exports = router;