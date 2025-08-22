const { Schema, model, Types } = require('mongoose');

const CartItemSchema = new Schema({
  productId: { type: Types.ObjectId, ref: 'Product', required: true },
  variantId: { type: Types.ObjectId, required: true },
  quantity: { type: Number, default: 1 }
});

const OrderSchema = new Schema({
  cartId: { type: Types.ObjectId, ref: 'Cart', required: true },
  items: [CartItemSchema],
  subtotal: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  total: { type: Number, required: true },
  promoCode: { type: String, default: null },
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped'],
    default: 'pending'
  },
  shippingAddress: {
    name: String,
    email: String,
    address: String,
    city: String,
    country: String,
    zip: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Order', OrderSchema);
