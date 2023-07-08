import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// cookie
import cookieParser from 'cookie-parser';

import dbConnect from './config/db.js';
import authRoutes from './routes/authRoute.js';

// configure env
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Cookie
app.use(cookieParser());

// PORT
const PORT = process.env.PORT;

// MODE
const MODE = process.env.DEV_MODE;

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!',
    });
});

// run listen
app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running on ${MODE} mode on port ${PORT}`.bgCyan.white);
});
