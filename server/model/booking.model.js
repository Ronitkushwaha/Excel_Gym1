const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
  {
    bookingid: { type: String, required: true, unique: true },
    memberid: { type: String, required: true },
    classid: { type: String, required: true },
    bookingdate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);
const tablemodel = mongoose.model('booking', Schema);
module.exports = tablemodel;