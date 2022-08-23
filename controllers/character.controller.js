import { characterService } from '../services/character.service.js';
import { CharacterEntity } from '../entities/character.entity.js';

export const getAll=async () => {
  const service=new characterService();
  const getAll=await service.getAll();
  if (!getAll||getAll.length===0) return 'Nenhum personagem foi encontrado';
  return getAll;
};

export const getById=(id) => {
  const service=new characterService();
  const getById=service.getById(id);
  if (!getById) return 'Nenhum personagem foi encontrado';
  return getById;
};

export const getName=(characterName) => {
  const service=new characterService();
  const getName=service.getName(characterName);
  if (!getName) return 'Nenhum personagem foi encontrado com o name';
  return getName;
};

export const create=(character) => {
  const service=new characterService();
  const characterEntity=new CharacterEntity(character);
  await characterEntity.createId(service.getById);
  const newCharacter=characterEntity.printCharacter();
  return await service.create(newCharacter);
};

export const update=(id, character) => {
  const service=new characterService();
  const updateCharacter=service.update(id, character);
  if (!updateCharacter) return 'Nenhum personagem foi encontrado com o ID'
  return updateCharacter;
}

export const deleteCharacter= (id) => {
  
}