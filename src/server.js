/* eslint-disable no-undef */
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 8080;
const main = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    app.listen(port, () => {
      console.log(`Application  listening on port ${port}`);
    });
  } catch (error) {
    console.log('failed to database: ', error);
  }
};

main();
