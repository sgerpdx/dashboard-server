const { Router } = require("express");
const Driver = require("../models/Driver");

module.exports = Router()
  .post("/", async (req, res, next) => {
    try {
      const driver = await Driver.create(req.body);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  .get("/", async (req, res, next) => {
    try {
      const drivers = await Driver.retrieve();
      res.send(drivers);
    } catch (err) {
      next(err);
    }
  })

  .get("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const driver = await Driver.retrieveById(id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  .put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const driver = await Driver.update(req.body, id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  .delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const driver = await Driver.deleteById(id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  });
