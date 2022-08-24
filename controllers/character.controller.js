import { characterService } from '../services/character.service.js';
import { CharacterEntity } from '../entities/character.entity.js';

export const getAll = async (req, res) => {
  const service = new characterService();
  const getAll = await service.getAll();
  if (!getAll || getAll.length === 0){
    res.status(404).send({message: 'Nenhum personagem foi encontrado'});
    return {message: 'Nenhum personagem foi encontrado'};
  } 
  res.status(200).send(getAll)
  return getAll;
};

export const getById = async (req, res) => {
  const service = new characterService();
  const getById = await service.getById(req.params.id);
  if (!getById || getById.length === 0){
    res.status(404).send({message: 'Nenhum personagem foi encontrado com o ID'});
    return {message: 'Nenhum personagem foi encontrado com o ID'};
  }
  res.status(200).send(getById);
  return getById;
};

export const getName= async (req, res) => {
  const service = new characterService();
  const getName = await service.getName(req.query.name);
  if (!getName || getName.length === 0){
    res.status(404).send({message: 'Nenhum personagem foi encontrado com o name'});
    return {message: 'Nenhum personagem foi encontrado com o name'};
  }
  res.status(200).send(getName);
  return getName;
};

export const create= async (req, res) => {
  const service = new characterService();
  const characterEntity = new CharacterEntity(req.body);
  await characterEntity.createId(service.getById);
  const newCharacter = characterEntity.printCharacter();
  const character = await service.create(newCharacter);
  if(!character){
    res.status(404).send({message: 'Personagem não foi criado'})
    return {message: 'Personagem não foi criado'};
  }
  res.status(202).send(character);
  return character;
};

export const update= async (id, character) => {
  const service = new characterService();
  const updateCharacter = await service.update(id, character);
  if (!updateCharacter) return 'Nenhum personagem foi encontrado com o ID';
  return updateCharacter;
}

export const deleteCharacter=(id) => {
  const service = new characterService();
  return await service.delete(id);
}