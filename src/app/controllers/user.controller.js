const User = require('../models/User.model');
exports.login = async (req, res) => {
  // const { email, password } = req.body;
  const result = await User.create(req.body);
  res.status(200).json({
    status: 'success',
    data: result
  });
};
