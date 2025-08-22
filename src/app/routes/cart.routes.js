const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { validateRequest } = require('../middleware/validateRequest');
const { addItemSchema } = require('../validations/cart.validation');

router.post('/', cartController.createCart);
router.get('/:token', cartController.getCart);
router.post(
  '/:token/items',
  validateRequest(addItemSchema),
  cartController.addItem
);
router.patch('/:token/items/:itemId', cartController.updateItem);
router.delete('/:token/items/:itemId', cartController.removeItem);
router.post('/:token/apply-promo', cartController.applyPromo);

module.exports = router;
