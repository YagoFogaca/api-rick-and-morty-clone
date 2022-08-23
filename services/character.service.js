import { characterDb } from '../database/schema/character.schema.js';

export class characterService {
  async getAll() {
    return await characterDb.find();
  }
  async getById(id) {
    return characterDb.findOne({ id: id });
  }
  async getName(characterName) {
    return characterDb.findOne({ name: characterName });
  }
  async create(character) {
    return characterDb.create(character);
  }
  async update(id, character) {
    return characterDb.findOneAndUpdate({ id: id }, character, { new: true });
  }
  async delete(id) {
    return characterDb.findOneAndDelete({ id: id });
  }
}
