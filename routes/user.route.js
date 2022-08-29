import { getAll, create } from '../controllers/user.controller.js';
import { UserMiddlewares } from '../middlewares/user.middlewares.js';

import { Router } from 'express';

const routerUser = Router();

routerUser.get('/', getAll);

routerUser.post('/create', UserMiddlewares, create);

export default routerUser;
