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

routerCharacter.get('characters', getAll);
routerCharacter.get('characters/find/:id', getById);
routerCharacter.get('characters/search', getByName);
routerCharacter.post('characters/create', create);
routerCharacter.put('characters/update/:id', update);
routerCharacter.delete('characters/delete/:id', deleteCharacter);

export default routerCharacter;
