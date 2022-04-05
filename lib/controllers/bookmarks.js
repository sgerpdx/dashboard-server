const { Router } = require("express");
const Bookmark = require("../models/Bookmark");

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      const bookmarks = await Bookmark.retrieve();
      res.send(bookmarks);
    } catch (err) {
      next(err);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const bookmark = await Bookmark.create(req.body);
      res.send(bookmark);
    } catch (err) {
      next(err);
    }
  });
