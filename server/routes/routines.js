const express = require("express");
const router = express.Router();
const { Routine } = require("../models/routine");

router.get("/get", async (req, res) => {
  const { id } = req.query;
  try {
    const routines = await Routine.find({ id });
    return res.status(200).json(routines);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/add", async (req, res) => {
  const { id, routine, title } = req.body;
  try {
    const data = new Routine({
      id,
      name: title,
      routines: routine,
    });
    await data.save();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/remove", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    await Routine.findByIdAndDelete({ _id: id });
    return res.status(200).json();
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
