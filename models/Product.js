const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number  },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductMart", ProductSchema);
