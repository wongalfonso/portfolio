const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"))
app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/login", (req,res) => {
  res.send("login")
})

app.get("/codewars", (req,res) => {
  res.send("codewars")
})

module.exports = app;