import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

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
        const user = new User({ name, email, phone, address, password: hashedPassword }).save();
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
        // validation
        if (!email || !password) {
            return res.status(403).send({
                success: false,
                message: 'Invalid email or password',
            });
        }
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
                message: 'You not authentication',
            });
        }
        // Generate Token When Successfully
        generateToken(res, user._id);
        res.status(200).send({
            success: true,
            message: 'Login successfully!',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
            // token,
        });
    } catch (error) {
        console.log(error);
        res.status(
            500,
            send({
                success: false,
                message: 'Error Login',
                error,
            }),
        );
    }
};

// TEST
export const test = async (req, res) => {
    res.send('protected route');
};
