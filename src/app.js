const express = require('express');
const notFound = require('./app/middleware/notFound');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// const productRoutes = require('./routes/product.routes');
const productRoutes = require('./app/routes/product.routes');
const cartRoutes = require('./app/routes/cart.routes');
const promoRoutes = require('./app/routes/promo.routes');
const orderRoutes = require('./app/routes/order.routes');
// const { errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(cors());

// routes
const userRoute = require('./app/routes/user.route');
const { errorHandler } = require('./app/middleware/errorHandler');

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/promos', promoRoutes);
app.use('/orders', orderRoutes);
app.use('/api/v1/user', userRoute);

app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
