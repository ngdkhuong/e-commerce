const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('DBConnection Successfully'))
    .catch((err) => {
        console.log('DBConnection Fail');
    });

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/cart', cartRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running');
});
