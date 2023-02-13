const { verifyToken, authorization, isAdmin } = require('./verifyToken');
const Product = require('../modules/Product');

const router = require('express').Router();

// CREATE
router.post('/', isAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
/* This is a PUT request to the server. */
router.put('/:id', isAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.json(500).json(err);
    }
});

// DELETE
/* This is a DELETE request to the server. */
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET PRODUCT
/* This is a GET request to the server. */
router.get('/find/:id', isAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS
/* A GET request to the server. */
router.get('/', async (req, res) => {
    /* Getting the query string from the url. */
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    /* A mongoDB operator that is used to match the value of a field in an array. */
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
