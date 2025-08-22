const User = require('../models/User.model');

exports.alluserFormDB = async () => {
  const user = await User.find();
  return user;
};
