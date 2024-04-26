const mongoose = require('mongoose');

const { Schema, model, Object } = mongoose;

const addToCart = new Schema(
    {
        productId: {
            type: String,
            ref: 'product',
        },
        quantity: Number,
        userId: String,
    },
    {
        timestamps: true,
    },
);

const addToCartModel = model('addToCart', addToCart);

module.exports = addToCartModel;
