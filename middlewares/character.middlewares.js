class Character {
  validateCharacter(character) {
    if (!character.name) {
      throw new Error('Name was not provided');
    }
    if (!character.imageUrl) {
      throw new Error('Image was not provided');
    }
  }

  validateName(name) {
    if (!name) {
      throw new Error('Name was not provided');
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
