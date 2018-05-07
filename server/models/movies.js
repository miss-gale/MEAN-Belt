const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true,
    trim: true
  }
});
module.exports = mongoose.model("Movie", movieSchema);

const reviewSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Review", reviewSchema);
