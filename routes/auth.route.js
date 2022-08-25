import { getByEmail } from '../controllers/user.controller.js';
import { Router } from 'express';

const routerAuth = Router();

routerAuth.post('/login', getByEmail);

export default routerAuth;
