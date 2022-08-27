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
  try {
    const service = new characterService();
    const characterEntity = new CharacterEntity(req.body);
    await characterEntity.createId(service.getById);
    const newCharacter = characterEntity.printCharacter();
    const character = await service.create(newCharacter);
    errors(character);
    return res.status(201).send({ message: 'Created' });
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};

export const update = async (req, res) => {
  try {
    const service = new characterService();
    const updateCharacter = await service.update(req.params.id, req.body);
    errors(updateCharacter);
    return res.status(200).send(updateCharacter);
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    const service = new characterService();
    const characterDeleted = await service.delete(req.params.id);
    errors(characterDeleted);
    return res.status(200).send({ message: 'Character deleted successfully' });
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};
