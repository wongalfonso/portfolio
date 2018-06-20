const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("yes");
})

router.post("/signup", (req, res, next) => {
  if (req.body.username && req.body.password) {
    let username = req.body.username;
    let password;
    bcrypt.genSalt(10, (err, salt) => {
      
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) console.log("ERROR", err);
        password = hash;
        const userData = {
          username: username,
          password: password
        }
        User.create(userData, (err, user) => {
          if (err) {
            return res.status(401).send(err)
          } else {
            return res.send(user);
          }
        })
      })            
    })    
  }
})

router.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
    User.findOne({ username: username })
      .exec((err, user) => {
        if (err) {
          console.log(err);
          const error = new Error("User Not Found!");
          return res.status(401).send(error)
        } else if (!user) {
          const error = new Error("User Not Found!");          
          return res.status(401).send(error);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (result === true) {            
            return res.send(user);            
          } else {
            const error = new Error("Wrong Password");
            return res.status(406).send(error)
          }                    
        })
      })
  
})

module.exports = router;