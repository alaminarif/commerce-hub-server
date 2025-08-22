const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/checkout/:token', orderController.checkout);
router.get('/:id', orderController.getById);
router.patch('/:id/status', orderController.updateStatus);

module.exports = router;
