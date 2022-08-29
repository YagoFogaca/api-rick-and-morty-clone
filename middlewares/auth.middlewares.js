class Login {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
  validate() {
    if (!this.email) {
      throw new Error('Email was not provided');
    }
    if (!this.password) {
      throw new Error('Password was not provided');
    }
  }
}

export const loginUser = (req, res, next) => {
  try {
    const user = new Login(req.body);
    user.validate();

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
