const express = require("express");
const router = express.Router();
const Types = require("../models/Types");
const Challenges = require("../models/Challenges");


router.get("/", (req, res) => {
  
  Types.find().then(kyus => {
    console.log(kyus);
    res.status(200).json(kyus);
  })
})

router.post('/', (req, res) => {
  console.log(req.body);
  // let dbType = null;
  // Types
  //     .findById(req.query.types)
  //     .then(type => {
  //         dbType = type;
  //         const newChallenge = new Challenges(req.body);
  //         newBlog.types = types._id;
  //         return newBlog.save();
  //     })
  //     .then(challenge => {
  //         dbType.challenge.push(challenge);
  //         dbType.save().then(() => res.status(201).json(challenge));
  //     })
  
  //     .catch(e => res.status(500).send('bad'));
  res.send("yes");
});

module.exports = router;