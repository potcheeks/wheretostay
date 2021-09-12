const express = require("express");
const app = express();
const router = express.Router();
const Directory = require("../models/directory");

//*=====================SHOW ENTIRE DIRECTORY =======================
router.get("/", (req, res) => {
  Directory.find({}, (err, foundDirectory) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundDirectory);
  });
});

//*======================FIND LISTING BY ID========================
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Directory.findById(id, (err, foundListing) => {
    if (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
    console.log("listing id", foundListing);
    res.status(StatusCodes.OK).json(foundListing);
  });
});

module.exports = router;

