import express from 'express';
import { login, register, logout, test } from '../controllers/authController.js';
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

// protected router
router.get('/admin-auth', verifyToken, isAdmin);

export default router;
