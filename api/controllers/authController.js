import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import User from '../models/User.js';
import { generateResetToken, generateToken } from '../utils/generateToken.js';
import jwt from 'jsonwebtoken';
import { mailer } from '../utils/mailer.js';

// GET Test
export const test = () => {
    res.send('test');
};

// POST REGISTER
export const register = async (req, res, next) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if (!name || !email || !password || !phone || !address) {
            return res.send({ message: 'Fields is Required' });
        }

        // check user
        const existingUser = await User.findOne({ email });
        // existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already registered please login',
            });
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = new User({
            ...req.body,
            password: hashedPassword,
        }).save();
        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error registering',
            error,
        });
    }
};

// POST LOGIN
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered',
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password',
            });
        }

        // Generate Token When Successfully
        generateToken(res, user._id);

        res.status(200).send({
            success: true,
            message: 'Login successfully!',
            user: {
                // except PASSWORD
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error Login',
            error,
        });
    }
};

// POST LOGOUT
export const logout = async (req, res) => {
    res.clearCookie('accessToken', { sameSite: 'none', secure: true }).status(200).send({
        success: true,
        message: 'You have been logged out!',
    });
};

// POST FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        // Generate a reset token and store it
        const token = generateResetToken(user._id);

        // Generate a reset token and store it
        if (token) {
            mailer(email, token);
        }

        res.status(200).send({
            success: true,
            message: 'You should a mail for reset password',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

// POST RESET PASSWORD
export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by userId from the token
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await hashPassword(newPassword);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).send({ success: true, message: 'Password reset successfully' });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ error: 'Token has expired' });
        }
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
