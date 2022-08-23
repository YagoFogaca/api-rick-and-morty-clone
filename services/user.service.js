export const getAll = async () => {
    return await userDb.find();
};

export const getById = async (id) => {
    return await userDb.findOne(id);
};

export const create = async (user) => {
    return await userDb.create(user);
};
