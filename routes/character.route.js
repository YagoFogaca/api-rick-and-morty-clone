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

routerCharacter.get('', token, getAll);
routerCharacter.get('/find/:id', token, getById);
routerCharacter.get('/search', token, checkName, getByName);
routerCharacter.post('/create', token, checkCreate, create);
routerCharacter.put('/update/:id', token, checkUpdate, update);
routerCharacter.delete('/delete/:id', token, deleteCharacter);

export default routerCharacter;
