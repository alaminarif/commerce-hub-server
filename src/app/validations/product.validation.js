const { z } = require('zod');

const variantSchema = z.object({
  name: z.string().min(1, 'Variant name is required'),
  price: z.number().positive('Price must be greater than 0'),
  stock: z.number().int().nonnegative()
});

const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().optional(),
  variants: z.array(variantSchema).nonempty('At least one variant required')
});

module.exports = { createProductSchema };
