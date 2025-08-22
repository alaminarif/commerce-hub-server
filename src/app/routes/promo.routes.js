const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promo.controller');

router.get('/', promoController.getAll);
router.post('/', promoController.create);
router.delete('/:id', promoController.remove);

module.exports = router;
