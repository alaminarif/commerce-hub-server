const { z } = require('zod');

const addItemSchema = z.object({
  productId: z.string().min(1),
  variantId: z.string().min(1),
  quantity: z.number().int().positive()
});

module.exports = { addItemSchema };
