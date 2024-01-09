import express from 'express';
const router= express.Router();
import {createPost, updatePost} from '../controllers/postControllers';
import { authGuard, adminGaurd } from '../middleware/authMiddleware';

router.post('/', authGuard, adminGaurd,createPost);
router.put('/:slug', authGuard, adminGaurd,updatePost);

export default router;