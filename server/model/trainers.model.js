const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    specialities: { type: String, required: true },
    contactinfo: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const tablemodel = mongoose.model('trainers', Schema);
module.exports = tablemodel;