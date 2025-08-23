const Cart = require('../models/cart.model');
const { v4: uuidv4 } = require('uuid');

const cartController = {
  async createCart(req, res, next) {
    try {
      const token = uuidv4();
      const { items = [], promoCode = null } = req.body;

      console.log(req.body);

      const cart = await Cart.create({
        token,
        items,
        promoCode
      });

      res.status(201).json({ token, cart });
    } catch (err) {
      next(err);
    }
  },
  async getCart(req, res, next) {
    try {
      const cart = await Cart.findOne({ token: req.params.token }).populate(
        'items.productId'
      );
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
      res.json(cart);
    } catch (err) {
      next(err);
    }
  },

  async addItem(req, res, next) {
    try {
      const { productId, variantId, quantity } = req.body;
      let cart = await Cart.findOne({ token: req.params.token });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });

      cart.items.push({ productId, variantId, quantity });
      await cart.save();
      res.status(201).json(cart);
    } catch (err) {
      next(err);
    }
  },

  async updateItem(req, res, next) {
    try {
      const { quantity } = req.body;
      let cart = await Cart.findOne({ token: req.params.token });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });

      const item = cart.items.id(req.params.itemId);
      if (!item) return res.status(404).json({ message: 'Item not found' });

      item.quantity = quantity;
      await cart.save();
      res.json(cart);
    } catch (err) {
      next(err);
    }
  },

  async removeItem(req, res, next) {
    try {
      let cart = await Cart.findOne({ token: req.params.token });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });

      cart.items.id(req.params.itemId).remove();
      await cart.save();
      res.json(cart);
    } catch (err) {
      next(err);
    }
  },

  async applyPromo(req, res, next) {
    try {
      const { code } = req.body;

      console.log(code);
      let cart = await Cart.findOne({ token: req.params.token });
      if (!cart) return res.status(404).json({ message: 'Cart not found' });

      cart.promoCode = code;
      await cart.save();
      res.json(cart);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = cartController;
