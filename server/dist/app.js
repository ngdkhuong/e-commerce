import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';
import morgan from 'morgan';
// import Stripe from 'stripe';
import cors from 'cors';
dotenv.config();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || '';
// const stripeKey = process.env.STRIPE_KEY || '';
connectDB(mongoURI);
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.get('/', (req, res) => {
    res.send('API Working with /api/v1');
});
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
