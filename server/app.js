const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/api/codewars");
mongoose.Promise = Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();

app.use(morgan("dev"))
app.use(express.static("dist"));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/login", (req,res) => {
  res.send("login")
})

app.use("/api/codewars", require("./routes/CodeWarTypes"))

 module.exports = app;