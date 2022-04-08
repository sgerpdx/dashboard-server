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
  .get("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const bookmark = await Bookmark.retrieveById(id);
      res.send(bookmark);
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
  })
  .put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const bookmark = await Bookmark.update(req.body, id);
      res.send(bookmark);
    } catch (err) {
      next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const bookmark = await Bookmark.deleteById(id);
      res.send(bookmark);
    } catch (err) {
      next(err);
    }
  });
