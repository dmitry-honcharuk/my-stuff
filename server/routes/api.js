import { Router } from 'express';

import usersRoutes from './auth';

const router = Router();

router.use('/auth', usersRoutes);

export default router;
