const { alluserFormDB } = require('../services/user.service');
// const httpStatus = require('http-status');

exports.login = async (req, res) => {
  // const { email, password } = req.body;
  const result = await alluserFormDB();
  res.status(200).json({
    status: 'success',
    data: result
  });
};
