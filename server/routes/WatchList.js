const express = require("express");
const router = express.Router();
const { WatchList } = require("../models");

router.get("/", async (req, res) => {
  const listOfWeather = await WatchList.findAll();
  res.json(listOfWeather);
});

router.post("/", async (req, res) => {
  const weather = req.body;

  try {
    const existingWeather = await WatchList.findOne({
      where: { name: weather.name },
    });
    if (existingWeather) {
      return res.status(400).json({ error: "Already on the watch list" });
    }
    const newWeather = await WatchList.create(weather);
    return res.json(newWeather);
  } catch (error) {
    console.error("An error occurred during the registration process:", error);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
});

module.exports = router;
