const Order = require('../models/order.model');
const Cart = require('../models/cart.model');

const orderController = {
  async checkout(req, res, next) {
    try {
      const cart = await Cart.findOne({ token: req.params.token }).populate(
        'items.productId'
      );
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
      if (cart.items.length === 0)
        return res.status(400).json({ message: 'Cart is empty' });

      let subtotal = 0;
      cart.items.forEach((item) => {
        const variant = item.productId.variants.id(item.variantId);
        subtotal += variant.price * item.quantity;
      });

      let discount = 0;
      // promo logic (optional check Promo model)
      if (cart.promoCode) {
        discount = 10; // fake demo discount
      }

      const total = subtotal - discount;

      const order = await Order.create({
        cartId: cart._id,
        items: cart.items,
        subtotal,
        discount,
        total,
        promoCode: cart.promoCode,
        shippingAddress: req.body.shippingAddress
      });

      res.status(201).json(order);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const order = await Order.findById(req.params.id).populate(
        'items.productId'
      );
      if (!order) return res.status(404).json({ message: 'Order not found' });
      res.json(order);
    } catch (err) {
      next(err);
    }
  },

  async updateStatus(req, res, next) {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );
      if (!order) return res.status(404).json({ message: 'Order not found' });
      res.json(order);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = orderController;
