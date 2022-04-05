const { Router } = require("express");
const Note = require("../models/Note");

module.exports = Router().get("/", async (req, res, next) => {
  try {
    const notes = await Note.retrieve();
    res.send(notes);
  } catch (err) {
    next(err);
  }
});
