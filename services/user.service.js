import { userDb } from '../database/schema/user.schema.js';

export class userService {
  async getAll() {
    return await userDb.find();
  }
  async getById(id) {
    return await userDb.findOne({ id: id });
  }
  async getByEmail(user) {
    return await userDb.findOne({ email: user.email });
  }
  async create(user) {
    return await userDb.create(user);
  }
}

// export const service = new userService();
