const express = require("express");
const app = express();
const router = express.Router();
const Directory = require("../models/directory");

//*=====================SHOW ENTIRE DIRECTORY =======================
router.get("/", (req, res) => {
  Directory.find({}, (err, foundPost) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundPost);
  });
});

//*======================FIND LISTING BY ID========================
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Directory.findById(id, (err, foundPost) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
    console.log("post id", foundPost);
    res.status(StatusCodes.OK).json(foundPost);
  });
});

module.exports = router;

