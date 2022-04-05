const { Router } = require("express");
const Bookmark = require("../models/Bookmark");

module.exports = Router().get("/", async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.retrieve();
    res.send(bookmarks);
  } catch (err) {
    next(err);
  }
});
