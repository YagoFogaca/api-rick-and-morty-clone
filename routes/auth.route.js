import { getByEmail } from '../controllers/user.controller.js';
import { Router } from 'express';
import { loginUser } from '../middlewares/auth.middlewares.js';

const routerAuth = Router();

routerAuth.post('/login', loginUser, getByEmail);

export default routerAuth;
