const { Schema, model } = require('mongoose');

const VariantSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 }
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  variants: [VariantSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Product', ProductSchema);
