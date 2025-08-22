/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');

const notFound = (req, res, next) => {
  return res.status(httpStatus.notFound).json({
    success: false,
    message: 'API Not Found !!',
    error: ''
  });
};

module.exports = notFound;
