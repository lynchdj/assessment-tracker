const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
  classCode: {
    type: String,
    required: true,
    trim: true,
    match: /[A-Z]{4}\d{4}/,
    uppercase: true,
    maxLength: 8,
    minLength: 8,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  recurring: {
    type: Boolean,
    required: true,
    default: false,
  },
  frequency: {
    type: String,
    required: true,
    default: "Weekly",
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;
