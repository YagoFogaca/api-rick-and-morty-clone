import { userService } from '../services/user.service.js';
import { UserEntity } from '../entities/user.entity.js';

export const getAll = async (req, res) => {
  const service = new userService();
  const getAll = await service.getAll();
  if (!getAll || getAll.length === 0) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(getAll);
};

export const getByEmail = async (req, res) => {
  const service = new userService();
  const getByEmail = await service.getByEmail(req.body);
  if (!getByEmail) {
    return res.status(400).send({ message: 'Login failed' });
  }

  if (req.body.password != getByEmail.password) {
    return res.status(400).send({ message: 'Login failed' });
  }

  return res.status(200).send({ message: 'Login successful' });
};

export const create = async (req, res) => {
  try {
    const service = new userService();
    const userEntity = new UserEntity(req.body);
    await userEntity.createId(service.getById);
    const createdUser = await service.create(userEntity.printUSer());
    if (!createdUser) {
      return res.status(400).send({ message: 'Bad Request' });
    }
    return res.status(201).send({ message: 'Created' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'Bad Request' });
  }
};
