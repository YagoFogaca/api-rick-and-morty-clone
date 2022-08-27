import { characterService } from '../services/character.service.js';
import { CharacterEntity } from '../entities/character.entity.js';
import { errors } from './errors/erroController.js';

export const getAll = async (req, res) => {
  try {
    const service = new characterService();
    const getAll = await service.getAll();
    errors(getAll);
    return res.status(200).send(getAll);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};

export const getById = async (req, res) => {
  try {
    const service = new characterService();
    const getById = await service.getById(req.params.id);
    errors(getById);
    return res.status(200).send(getById);
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};

export const getByName = async (req, res) => {
  try {
    const service = new characterService();
    const getName = await service.getName(req.query.name);
    errors(getName);
    return res.status(200).send(getName);
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};

export const create = async (req, res) => {
  const service = new characterService();
  const characterEntity = new CharacterEntity(req.body);
  await characterEntity.createId(service.getById);
  const newCharacter = characterEntity.printCharacter();
  const character = await service.create(newCharacter);
  if (!character) {
    return res.status(400).send({ message: 'Bad Request' });
  }
  return res.status(201).send({ message: 'Created' });
};

export const update = async (req, res) => {
  const service = new characterService();
  const updateCharacter = await service.update(req.params.id, req.body);
  if (!updateCharacter) {
    return res.status(400).send({ message: 'Bad Request' });
  }
  return res.status(200).send(updateCharacter);
};

export const deleteCharacter = async (req, res) => {
  const service = new characterService();
  const characterDeleted = await service.delete(req.params.id);
  if (!characterDeleted) {
    return res.status(400).send({ message: 'Bad request' });
  }
  return res.status(200).send({ message: 'Character deleted successfully' });
};
