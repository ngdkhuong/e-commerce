const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        productName: String,
        brandName: String,
        category: String,
        productImage: [],
        description: String,
        price: Number,
        sellingPrice: Number,
    },
    {
        timestamps: true,
    },
);

const productModel = model('product', productSchema);

module.exports = productModel;
