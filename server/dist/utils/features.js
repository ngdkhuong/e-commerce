import mongoose from 'mongoose';
import { myCache } from '../app.js';
export const connectDB = (uri) => {
    mongoose
        .connect(uri, {
        dbName: 'e-commerce',
    })
        .then((c) => console.log(`DB Connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
export const invalidateCache = ({ product, order, admin, userId, orderId, productId }) => {
    if (product) {
        const productKeys = ['latest-products', 'categories', 'all-products'];
        if (typeof productId === 'string')
            productKeys.push(`product-${productId}`);
        if (typeof productId === 'object')
            productId.forEach((i) => productKeys.push(`product-${i}`));
        myCache.del(productKeys);
    }
    if (order) {
        const ordersKeys = ['all-orders', `my-orders-${userId}`, `order-${orderId}`];
        myCache.del(ordersKeys);
    }
    if (admin) {
        myCache.del(['admin-stats', 'admin-pie-charts', 'admin-bar-charts', 'admin-line-charts']);
    }
};
