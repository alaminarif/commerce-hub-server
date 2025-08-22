const { Schema, model } = require('mongoose');

const PromoSchema = new Schema({
  code: { type: String, required: true, unique: true },
  type: { type: String, enum: ['percent', 'fixed'], required: true },
  value: { type: Number, required: true },
  validFrom: { type: Date, required: true },
  validTo: { type: Date, required: true },
  active: { type: Boolean, default: true }
});

module.exports = model('Promo', PromoSchema);
