const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

mongoose.connect("mongodb://localhost/codewars");
mongoose.Promise = Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.static("dist"));
app.use(express.static("public"));
// app.use(session({
//   secret: "word hard",
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }))

app.use("/api/users", require("./routes/Users"));
app.use("/api/codewars", require("./routes/Types"));

 module.exports = app;