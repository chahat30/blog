import express from 'express';
const router= express.Router();
import { loginUser, registerUser } from '../controllers/userControllers';

router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;