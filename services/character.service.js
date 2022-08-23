import { characterDb } from '../database/schema/character.schema.js';

export class characterService {
  async getAll() {
    return await characterDb.find();
  }
  async getById(id) {
    return characterDb.findOne({ id: id });
  }
  async getName(name) {
    return characterDb.findOne({ name: name });
  }
  async create(character) {
    return characterDb.create(character);
  }
  async updateService(id, character) {
    return characterDb.findOneAndUpdate({ id: id }, character, { new: true });
  }
  async delete() {
    return characterDb.findOneAndDelete({ id: id });
  }
}
