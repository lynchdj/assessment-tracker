const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /[A-Z]{4}\d{4}/,
    uppercase: true,
    maxLength: 8,
    minLength: 8,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  hpo: {
    type: Boolean,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  estimate: {
    type: Number,
    required: true,
    default: 0,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  grade: {
    type: String,
    required: true,
    default: "NCN",
    trim: true,
    match: /WN|WL|WD|NCN|N|HLP|CRN|CRS|PS|P|CR|D|HD/,
    uppercase: true,
    minLength: 1,
    minLength: 3,
  },
  GPA: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
