const { verifyToken, authorization, isAdmin } = require('./verifyToken');
const Order = require('../modules/Order');

const router = require('express').Router();

// CREATE
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
/* This is a PUT request to the server. */
router.put('/:id', isAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.json(500).json(err);
    }
});

// DELETE
/* This is a DELETE request to the server. */
// ! order sử dụng hàm isAdmin để không cho user chỉnh sửa thông tin đơn khi đặt hàng như giá, số lượng
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER ORDERS
/* This is a GET request to the server. */
router.get('/find/:userId', authorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS
/* A GET request to the server. */
router.get('/', isAdmin, async (req, res) => {
    /* Getting the query string from the url. */
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET MONTHLY INCOME
router.get('/income', isAdmin, async (req, res) => {
    const date = new Date();

    /* It's getting the last month and the month before that. */
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount',
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
