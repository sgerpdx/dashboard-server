require("dotenv").config();
const { Router } = require("express");
const fetch = require("node-fetch");
const { formatNewsResponse } = require("../services/mediastackAPI");

module.exports = Router().get("/", async (req, res, next) => {
  const URL = "http://api.mediastack.com/v1/news?access_key=";
  console.log("Moose reporting to river.");
  try {
    const response = await fetch(`${URL}${process.env.MS_ACCESS_KEY}`);
    const jsonResponse = await response.json();
    const news = await formatNewsResponse(jsonResponse);
    console.log("***App News Res:", news);
    res.send(news);
  } catch (err) {
    next(err);
  }
});
