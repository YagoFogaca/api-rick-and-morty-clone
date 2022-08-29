class User {
  constructor(user) {
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo;
  }
  validate() {
    if (!this.name) {
      throw new Error('Name was not provided');
    }
    if (!this.username) {
      throw new Error('Username was not provided');
    }
    if (!this.email) {
      throw new Error('Email was not provided');
    }
    if (!this.password) {
      throw new Error('Password was not provided');
    }
    if (!this.photo) {
      throw new Error('Photo was not provided');
    }
  }
}

export const UserMiddlewares = (req, res, next) => {
  try {
    const user = new User(req.body);
    user.validate();

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
