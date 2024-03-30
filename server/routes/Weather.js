const express = require("express");
const router = express.Router();
const { Weather } = require("../models");

router.get("/", async (req, res) => {
  const listOfWeather = await Weather.findAll();
  res.json(listOfWeather);
});

 router.post("/", async (req, res) => {
   const weather = req.body;
   await Weather.create(weather);
   res.json(weather);
 });

module.exports = router;
