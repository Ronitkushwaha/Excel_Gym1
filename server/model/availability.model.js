const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
  {
    availabilityid: { type: String, required: true, unique: true },
    trainersid: { type: String, required: true },
    dayofweek: { type: String, required: true },
    starttime: { type: String, required: true },
    endtime: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const tablemodel = mongoose.model('availability', Schema);
module.exports = tablemodel;