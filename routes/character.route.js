import {
  getAll,
  getById,
  getByName,
  create,
  update,
  deleteCharacter,
} from '../controllers/character.controller.js';
import { Router } from 'express';
import {
  checkName,
  checkCreate,
  checkUpdate,
} from '../middlewares/character.middlewares.js';
import { token } from '../middlewares/token.middlewares.js';

const routerCharacter = Router();

routerCharacter.get('', getAll);
routerCharacter.get('/find/:id', getById);
routerCharacter.get('/search', checkName, getByName);
routerCharacter.post('/create', checkCreate, create);
routerCharacter.put('/update/:id', checkUpdate, update);
routerCharacter.delete('/delete/:id', deleteCharacter);

export default routerCharacter;
