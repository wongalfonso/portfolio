const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const Kyus = require("../models/Kyus");
const Challenges = require("../models/Challenges");


router.get("/", (req, res) => {

  Kyus.find().then(kyus => {
    console.log(kyus);
    res.status(200).json(kyus);
  })
})

router.post('/postblog', (req, res) => {
  // console.log(req.body);
  let dbUser;  
  const username = {"username" : req.body.username};
  const kyuBlog = {
    "kyuType": req.body.type, 
    "name" : req.body.name, 
    "thinking" : req.body.thinking, 
    "instructions": req.body.instructions, 
    "answer": req.body.answer
  }
  User
    .findOne(username)
    .then((user) => {  
      console.log("USER", user);    
      dbUser = user;      
      const newKyus = new Kyus(kyuBlog);
      newKyus.user = dbUser._id;
      newKyus.save((err, kyu) => {
        if (err) {
          res.status(201).send(err);
        } else {
          dbUser.kyus.push(kyu._id);
          dbUser.save().then(() => res.status(201).json(kyu));
        }
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
  
  
  //     if (!kyu) {
  //       dbUser.kyus.push(type);
  //       dbUser.save();
  //     } else {
  //       dbKyu = kyu
  //     }
  //     const newChallenge = new Challenges(name, thinking, instructions, answer);
  //     newChallenge.kyus = kyu._id;
  //     return newChallenges.save();
  //   })
  // .then(challenge => {
  //   dbKyu.challenges.push(challenge);

  // })




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

});

module.exports = router;