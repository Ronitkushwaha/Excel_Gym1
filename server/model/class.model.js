const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
  {
    classid: { type: String, required: true, unique: true },
    classname: { type: String, required: true },
    descriptions: { type: String, required: true },
    trainersid: { type: String, required: true },
    schedule: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const tablemodel = mongoose.model('class', Schema);
module.exports = tablemodel;