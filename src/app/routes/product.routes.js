const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { validateRequest } = require('../middleware/validateRequest');
const { createProductSchema } = require('../validations/product.validation');

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post(
  '/',
  validateRequest(createProductSchema),
  productController.create
);
router.patch('/:id', productController.update);
router.delete('/:id', productController.remove);

module.exports = router;
