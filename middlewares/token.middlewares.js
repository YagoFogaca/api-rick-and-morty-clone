import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

class Token {
  validateToken(token) {
    if (!token) {
      throw new Error('Invalid token');
    }
  }
  validate(token) {
    return jwt.verify(token, process.env.SECRET);
  }
}

export const token = (req, res, next) => {
  try {
    const tokenValidate = new Token();
    const tokenReq = req.headers.authorization;
    const parts = tokenReq.split(' ');
    const [scheme, token] = parts;
    tokenValidate.validateToken(token);
    const validateToken = tokenValidate.validate(token);

    next();
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
