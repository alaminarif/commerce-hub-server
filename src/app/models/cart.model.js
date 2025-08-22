const { Schema, model, Types } = require('mongoose');

const CartItemSchema = new Schema({
  productId: { type: Types.ObjectId, ref: 'Product', required: true },
  variantId: { type: Types.ObjectId, required: true },
  quantity: { type: Number, default: 1 }
});

const CartSchema = new Schema({
  token: { type: String, required: true, unique: true },
  items: [CartItemSchema],
  promoCode: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Cart', CartSchema);
