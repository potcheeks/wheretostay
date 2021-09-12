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

//*======================SEED========================
router.get("/seed", (req, res) => {
  Directory.create(
    
      {
        name: "Hawaii Towers",
        address:
        {
        street_address: "73 Meyer Road",
        postal_code: "437898", //! Numbers leading with 0 can't be used as a number field
        area: "East",
        },
        size: 2819,
        transactions: [
          {
          date: "2021-07-30",
          unit_type: "2 Br",
          units_sold: 1,
          units_rented: 2,
          transacted_price:
          {
            price: "5,005,000",
            psf: "2,600"
          }
        },
        {
          date: "2020-06-30",
          unit_type: "2 Br",
          units_sold: 1,
          units_rented: 2,
          transacted_price: 
          {
            price: "5,005,000",
            psf: "2,600",
          },
        }
      ],
        listings: [
          {
            date: "2021-08-20",
            unit_type: "3 Br",
            units_sold: 0,
            units_rented: 1,
            transacted_price: {
              price: "7,918,000",
              psf: "2,620",
            },
          },
          {
            date: "2021-08-30",
            unit_type: "3 Br",
            units_sold: 0,
            units_rented: 1,
            transacted_price: {
              price: "7,918,000",
              psf: "2,620",
            },
          },
        ],
        nearby_amenities: [
          { 
            amenity_type: "Bus station",
            name: "91101 Bus Stop",
            distance: 350,
          },
          { 
            amenity_type: "Bus station",
            name: "91201 Bus Stop",
            distance: 450,
          },
          { 
            amenity_type: "School",
            name: "Haig Girls Primary",
            distance: 850,
          },
        ],
      },
    (err, data) => {
      res.redirect("/directory");
    }
  );
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
