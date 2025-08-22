const { z } = require('zod');

const shippingSchema = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  zip: z.string()
});

const checkoutSchema = z.object({
  shippingAddress: shippingSchema
});

const updateStatusSchema = z.object({
  status: z.enum(['pending', 'paid', 'shipped'])
});

module.exports = { checkoutSchema, updateStatusSchema };
