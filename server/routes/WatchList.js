const express = require("express");
const router = express.Router();
const { WatchList } = require("../models");

router.get("/", async (req, res) => {
  const listOfWeather = await WatchList.findAll();
  res.json(listOfWeather);
});

router.post("/", async (req, res) => {
  const weather = req.body;
  await WatchList.create(weather);
  res.json(weather);
});

module.exports = router;
