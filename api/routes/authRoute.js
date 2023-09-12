import express from 'express';
import { login, register, logout, test, forgotPassword, resetPassword } from '../controllers/authController.js';
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

// protected router
router.get('/test', verifyToken, isAdmin, test);

// Forgot Password || POST
router.post('/forgot-password', forgotPassword);

// Reset Password || POST
router.post('/reset-password/:token', resetPassword);

// Admin protected router
router.get('/admin-auth', verifyToken, isAdmin);

// User protected router
router.get('/user-auth', verifyToken);

export default router;
