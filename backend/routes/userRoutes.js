import express from 'express';
const router= express.Router();
import { loginUser, registerUser, updateProfile, userProfile} from '../controllers/userControllers';
import { authGuard } from '../middleware/authMiddleware';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authGuard, userProfile);
router.put('/updateProfile',authGuard ,updateProfile);
router.put('/updateProfilePicture', authGuard, updateProfile);

export default router;