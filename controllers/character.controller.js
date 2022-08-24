import { characterService } from '../services/character.service.js';
import { CharacterEntity } from '../entities/character.entity.js';

export const getAll = async (req, res) => {
  try {
    console.log('entrou aqui');
    const service = new characterService();
    const getAll = await service.getAll();
    if (!getAll || getAll.length === 0) {
      return res.status(404).send({ message: 'Not Found' });
    }
    return res.status(200).send(getAll);
  } catch (e) {
    return res.status(404).send({ message: 'Not Found' });
  }
};

export const getById = async (req, res) => {
  const service = new characterService();
  const getById = await service.getById(req.params.id);
  if (!getById) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(getById);
};

export const getByName = async (req, res) => {
  const service = new characterService();
  const getName = await service.getName(req.query.name);
  if (!getName || getName.length === 0) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(getName);
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
