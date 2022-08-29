class UserCreate {
  constructor(user) {
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo;
  }
  validate() {
    if (!this.name) {
      throw new Error('Name not found');
    }
    if (!this.username) {
      throw new Error('Username not found');
    }
    if (!this.email) {
      throw new Error('Email not found');
    }
    if (!this.password) {
      throw new Error('Password not found');
    }
    if (!this.photo) {
      throw new Error('Photo not found');
    }
  }
}

export const UserMiddlewares = (req, res, next) => {
  try {
    const user = new UserCreate(req.body);
    user.validate();

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
