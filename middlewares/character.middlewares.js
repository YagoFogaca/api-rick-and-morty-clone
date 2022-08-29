class Character {
  validateCharacter(character) {
    if (!character.name) {
      throw new Error('Name not found');
    }
    if (!character.imageUrl) {
      throw new Error('Image not found');
    }
  }

  validateName(name) {
    if (!name) {
      throw new Error('Name not found');
    }
  }
}

export const checkName = (req, res, next) => {
  try {
    const character = new Character();
    character.validateName(req.query.name);

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};

export const checkCreate = (req, res, next) => {
  try {
    const character = new Character();
    character.validateCharacter(req.body);

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};

export const checkUpdate = (req, res, next) => {
  try {
    const character = new Character();
    character.validateCharacter(req.body);

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
