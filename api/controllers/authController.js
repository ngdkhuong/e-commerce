import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import User from '../models/User.js';
import { generateToken, refreshToken } from '../utils/generateToken.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

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
        const token = generateToken(res, user._id);

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
                token,
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
        const token = crypto.randomBytes(20).toString('hex');

        // Find the user by email and update their resetToken field
        const user = await User.findOne(
            { email: email },
            // { token: token },
            // { new: true }, // This option returns the updated document
        );

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        // Create a reset link using the token
        const resetLink = `http://localhost:5173/reset-password/${token}`;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_FROM_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        var mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: email,
            subject: 'Reset Password Link',
            html: `
            <p>You are receiving this email because you (or someone else) have requested a password reset for your account.</p>
            <p>Please click the following link to reset your password:</p>
            <a href="${resetLink}">Reset Password</a>
            <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
          `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.redirect('/login');

        res.status(200).send({
            success: true,
            message: 'Please check your email for validation',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const token = req.params.token;
        // const { id, token } = req.params;
        const { password } = req.body;

        console.log(token);

        try {
            // password
            if (password && password.length < 6) {
                return res.json({ error: 'password must be at least 6 characters' });
            }

            const hashedPassword = password ? await hashPassword(password) : undefined;
            const updatedPassword = await User.findByIdAndUpdate(req.user._id, { hashedPassword });

            res.status(200).send({
                success: true,
                message: 'Profile Updated Successfully',
                updatedPassword,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: 'Profile Updated Error',
                error,
            });
        }
    } catch (error) {}
};
