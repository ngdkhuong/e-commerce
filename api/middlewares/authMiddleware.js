import JWT from 'jsonwebtoken';
import User from '../models/User.js';

// Protected Routes token base
export const verifyToken = async (req, res, next) => {
    let token;

    if (token === req.cookies.accessToken || token === req.cookies.refreshToken) {
        try {
            // ? chuyển mã token sang object
            const decoded = JWT.verify(token, process.env.JWT_SECRET);
            // ? tìm kiếm theo id của user trong object được chuyển đổi
            req.user = await User.findById(decoded.userId);
            next();
        } catch (error) {
            console.log(error);
        }
    }
};

// Admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        // console.log(user);
        if (user.role !== 1) {
            res.status(403).send({
                success: false,
                message: 'Unauthorized Access Admin!',
            });
        } else {
            res.status(200).send({
                success: true,
                message: 'Welcome to dashboard',
            });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware',
        });
    }
};
