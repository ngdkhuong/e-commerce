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

// protected router
router.get('/test', verifyToken, isAdmin);

// protected router
router.get('/user-auth', verifyToken, (req, res) => {
    res.status(200).send({ auth: true });
});

export default router;
