const express = require('express');
const notFound = require('./app/middleware/notFound');
// const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(urlencoded({ extended: true }));

// routes
// const userRoute = require('./routes/user.route');
// app.use('/api/v1/user', userRoute);

app.use(notFound);

module.exports = app;
