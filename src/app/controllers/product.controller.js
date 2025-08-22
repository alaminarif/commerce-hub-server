const Product = require('../models/product.model');

const productController = {
  async getAll(req, res, next) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = productController;
