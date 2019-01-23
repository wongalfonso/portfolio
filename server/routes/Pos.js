const express = require ('express');
const Pos = require('../models/Pos');

const router = express.Router();

router.get('/', (req, res) => {
  Pos.find({})
  .exec((err, types) => {
    (err) && res.status(500).send(err)
    console.log(types);
    res.status(200).send(types);
  })
});

module.exports = router;