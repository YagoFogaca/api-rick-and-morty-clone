export class userService {
    async getAll() {
        return await userDb.find();
    }
    async getById(id) {
        return await userDb.findOne({ id: id });
    }
    async create(user) {
        return await userDb.create(user);
    }
}
