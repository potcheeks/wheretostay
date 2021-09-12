const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  size: { type: String },
  transactions: { type: String },
  listings: { type: String },
  nearby_amenities: { type: String}
});

const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;

