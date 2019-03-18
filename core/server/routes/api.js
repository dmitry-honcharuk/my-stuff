import { Router } from 'express';

import authRoutes from './auth';
import productRoutes from './product';

const router = Router();

router.use('/auth', authRoutes);
router.use('/product', productRoutes);

export default router;
