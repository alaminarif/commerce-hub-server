const { ZodError } = require('zod');

function validateRequest(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body); // validate & sanitize
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          error: 'ValidationError',
          details: err.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      next(err);
    }
  };
}

module.exports = { validateRequest };
