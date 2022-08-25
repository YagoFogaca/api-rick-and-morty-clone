import { getAll, create, getByEmail } from '../controllers/user.controller.js';

import { Router } from 'express';

const routerUser = Router();

routerUser.get('/', getAll);

routerUser.post('/create', create);

export default routerUser;

// https://api-rick-and-morty-clone.herokuapp.com/users/create
