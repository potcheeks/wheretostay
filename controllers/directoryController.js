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
        name: "Kent Ridge Hill Residences",
        address:
        {
        street_address: "South Buona Vista Road",
        postal_code: "118171", //! Numbers leading with 0 can't be used as a number field
        area: "South",
        },
        size: 797,
        transactions: [
        //   {
        //   date: "2020-04-20",
        //   unit_type: "5 Br",
        //   units_sold: 1,
        //   units_rented: 0,
        //   transacted_price:
        //   {
        //     price: "2,930,000",
        //     psf: "1,080"
        //   }
        // },
      ],
        listings: [
          {
            date: "2021-09-13",
            unit_type: "2 Br",
            units_sold: 0,
            units_rented: 0,
            transacted_price: {
              price: "1,465,000",
              psf: "1,838",
            },
          },
          // {
          //   date: "2020-05-30",
          //   unit_type: "3 Br",
          //   units_sold: 1,
          //   units_rented: 1,
          //   transacted_price: {
          //     price: "3,918,000",
          //     psf: "2,300",
          //   },
          // },
        ],
        nearby_amenities: [
          { 
            amenity_type: "MRT station",
            name: "Pasir Panjang MRT",
            distance: 580,
          },
          { 
            amenity_type: "MRT station",
            name: "Haw Par Villa MRT",
            distance: 970,
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
