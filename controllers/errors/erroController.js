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
  if (user.email) {
    return user;
  }

  throw new Error('Email already registered');
}
