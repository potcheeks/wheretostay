const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorySchema = new Schema({
  name: { type: String, required: true },
  area: { type: String } ,
  address: {
    street_address: { type: String, required: true },
    postal_code: { type: String, required: true }, //! Numbers leading with 0 can't be used as a number field
    // area: { type: String, required: true }, 
  },
  size: { type: Number },
  transactions: [{
    date: { type: Date, default: Date.now },
    unit_type: { type: String },
    units_sold: { type: Number },
    units_rented: { type: Number },
    transacted_price: { 
      price: {type: String},
      psf: {type: String}
    }
  }],
  listings: [{
    date: { type: Date, default: Date.now },
    unit_type: { type: String },
    units_sold: { type: Number },
    units_rented: { type: Number },
    listed_price: { 
      price: {type: String},
      psf: {type: String}
    }
  }],
  nearby_amenities: [{ 
    amenity_type: {type: String },
    name: {type: String},
    distance: {type: Number}
  }],
});

const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
