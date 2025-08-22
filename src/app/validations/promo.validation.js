const { z } = require('zod');

const createPromoSchema = z.object({
  code: z.string().toUpperCase().min(3),
  type: z.enum(['percent', 'fixed']),
  value: z.number().positive(),
  validFrom: z.string().datetime(),
  validTo: z.string().datetime()
});

const applyPromoSchema = z.object({
  code: z.string().toUpperCase()
});

module.exports = { createPromoSchema, applyPromoSchema };
