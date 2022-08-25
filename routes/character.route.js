import {
  getAll,
  getById,
  getByName,
  create,
  update,
  deleteCharacter,
} from '../controllers/character.controller.js';
import { Router } from 'express';

const routerCharacter = Router();

routerCharacter.get('', getAll);
routerCharacter.get('/find/:id', getById);
routerCharacter.get('/search', getByName);
routerCharacter.post('/create', create);
routerCharacter.put('/update/:id', update);
routerCharacter.delete('/delete/:id', deleteCharacter);

export default routerCharacter;
