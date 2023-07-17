const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  company: {
    type: String,
    require: true,
    enum: {
        values: ["apple", "mi", "samsung"],
        message: `{VALUE} is not supported!`
    }
  },
  price: {
    type: Number,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  stars: {
    type: Number,
    default: 4.8
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Product", productSchema)