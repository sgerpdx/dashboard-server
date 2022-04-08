const { Router } = require("express");
const Note = require("../models/Note");

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      const notes = await Note.retrieve();
      res.send(notes);
    } catch (err) {
      next(err);
    }
  })
  .get("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const note = await Note.retrieveById(id);
      res.send(note);
    } catch (err) {
      next(err);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const note = await Note.create(req.body);
      res.send(note);
    } catch (err) {
      next(err);
    }
  })
  .put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const note = await Note.update(req.body, id);
      res.send(note);
    } catch (err) {
      next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const note = await Note.deleteById(id);
      res.send(note);
    } catch (err) {
      next(err);
    }
  });
