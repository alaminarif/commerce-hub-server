/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
// httpStatus.NOT_FOUND;

const notFound = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: 'API Not Found !!',
    error: ''
  });
};

module.exports = notFound;
