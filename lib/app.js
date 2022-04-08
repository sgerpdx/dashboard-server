require("dotenv").config();
const express = require("express");
const { formatNewsResponse } = require("./services/mediastackAPI");
// const cors = require("cors");
// const morgan = require('morgan');
// const superagent = require('superagent');

const app = express();

//app.use(cors());
app.use(express.json());

// The following line needs to be active for client-side form input
app.use(express.urlencoded({ extended: false }));

// This sets the response headers to allow the client to fetch the resources
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/v1/bookmarks", require("./controllers/bookmarks"));
app.use("/api/v1/notes", require("./controllers/notes"));

app.get("/api/v1/news", async (req, res, next) => {
  const URL = "http://api.mediastack.com/v1/news?access_key=";
  try {
    const response = await request.get(`${URL}${process.env.MS_ACCESS_KEY}`);
    const jsonRes = await response.json();
    const newsRes = formatNewsResponse(jsonRes);
    res.send(newsRes);
  } catch (err) {
    next(err);
  }
});

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

console.log("Hey There");

module.exports = app;
