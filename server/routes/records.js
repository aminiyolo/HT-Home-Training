const express = require("express");
const router = express.Router();
const { Record } = require("../models/records");

router.get("/get", async (req, res) => {
  const { id } = req.query;
  try {
    const data = await Record.findOne({ id });
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/post", async (req, res) => {
  const { id, routine } = req.body;
  try {
    const data = new Record({
      id,
      type: "success",
      records: routine,
    });
    await data.save();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
