const Promo = require('../models/promo.model');

const promoController = {
  async getAll(req, res, next) {
    try {
      const promos = await Promo.find();
      res.json(promos);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const promo = await Promo.create(req.body);
      res.status(201).json(promo);
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const promo = await Promo.findByIdAndDelete(req.params.id);
      if (!promo) return res.status(404).json({ message: 'Promo not found' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = promoController;
