const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
  {
    memberid: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    joindate: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const tablemodel = mongoose.model('members', Schema);
module.exports = tablemodel;