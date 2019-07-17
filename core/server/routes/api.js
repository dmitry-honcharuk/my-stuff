import { Router } from 'express';

import authRoutes from './auth';
import productRoutes from './product';
import userRoutes from './user';
import categoryRoutes from './category';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);

export default router;
