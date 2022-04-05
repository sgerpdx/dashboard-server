const express = require("express");
// const cors = require("cors");
// const morgan = require('morgan');
// const superagent = require('superagent');

const app = express();

//app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/bookmarks", require("./controllers/bookmarks"));
app.use("/api/v1/notes", require("./controllers/notes"));

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

console.log("Hey There");

module.exports = app;
