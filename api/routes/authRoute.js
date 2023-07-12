import express from 'express';
import { login, register, logout } from '../controllers/authController.js';
import { isAdmin, verifyToken } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing
// REGISTER
router.post('/register', register);

// LOGIN
router.post('/login', login);

// LOGIN
router.post('/logout', logout);

// test router
// router.get('/test', verifyToken, isAdmin, test);

export default router;
