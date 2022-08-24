import { getAll, create } from '../controllers/user.controller.js';

import { Router } from 'express';

export const router = Router();

router.get('/', getAll);

router.post('/create', create);

// export default router;
