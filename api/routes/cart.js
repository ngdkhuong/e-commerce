const { verifyToken, authorization, isAdmin } = require('./verifyToken');
const Cart = require('../modules/Cart');

const router = require('express').Router();

// CREATE
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
/* This is a PUT request to the server. */
// ! cart sử dụng hàm authorization để cho phép user thêm, xóa giỏ hàng
router.put('/:id', authorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.json(500).json(err);
    }
});

// DELETE
/* This is a DELETE request to the server. */
router.delete('/:id', authorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART
/* This is a GET request to the server. */
router.get('/find/:userId', authorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS
/* A GET request to the server. */
router.get('/', isAdmin, async (req, res) => {
    /* Getting the query string from the url. */
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
