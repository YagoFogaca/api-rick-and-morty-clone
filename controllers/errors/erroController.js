export function errors(data) {
  if (!data) {
    throw new Error('Not Found');
  }

  if (data === false) {
    throw new Error('Bad Request');
  }

  if (data.length === 0) {
    throw new Error('No content');
  }
}

export function verifyEmail(user) {
  if (!user) {
    return user;
  }

  throw new Error('Email already registered');
}

// Login
// {
//   "name": "YagoFogaca",
//   "username": "yagofogaca",
//   "email": "yagofogaca20@gmail.com",
//   "password": "12345",
//   "photo": "https://avatars.githubusercontent.com/u/99728003?v=4"
// }
