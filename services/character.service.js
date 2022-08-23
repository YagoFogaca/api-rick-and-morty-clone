export const getAllService = () => {
    return characterDb.find();
};

export const getByIdService = (id) => {
    return characterDb.findOnde({ id: id });
};

export const getName = (name) => {
    return characterDb.findOnde({ name: name });
};

export const createService = (character) => {
    return characterDb.create(character);
};

export const updateService = (id, character) => {
    return characterDb.findOneAndUpdate({ id: id }, character, { new: true });
};

export const deleteService = (id) => {
    return characterDb.findOneAndDelete({ id: id });
};
