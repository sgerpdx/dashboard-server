const { Router } = require("express");
const User = require("../models/User");

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      const users = await User.retrieve();
      res.send(users);
    } catch (err) {
      next(err);
    }
  })
  .get("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User.retrieveById(id);
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User.update(req.body, id);
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User.deleteById(id);
      res.send(user);
    } catch (err) {
      next(err);
    }
  });
