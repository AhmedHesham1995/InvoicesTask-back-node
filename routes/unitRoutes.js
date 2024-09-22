const express = require("express");
const Unit = require("../models/Unit");
const router = express.Router();

router.get("/", async (req, res) => {
  const units = await Unit.find();

  res.status(200).json(units);
});

router.post("/", async (req, res) => {
  const { name, unitNo } = req.body;

  const unit = new Unit({ name, unitNo });

  await unit.save();

  res.status(201).json(unit);
});

module.exports = router;
