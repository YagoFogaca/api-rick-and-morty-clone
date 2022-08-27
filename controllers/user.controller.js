import { userService } from '../services/user.service.js';
import { UserEntity } from '../entities/user.entity.js';
import { errors } from './errors/erroController.js';
import bcryptjs from 'bcryptjs';

export const getAll = async (req, res) => {
  try {
    const service = new userService();
    const getAll = await service.getAll();
    errors(getAll);
    return res.status(200).send(getAll);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return res.status(err.status).send(err.message);
  }
};

export const getByEmail = async (req, res) => {
  try {
    const service = new userService();
    const user = req.body;
    const getByEmail = await service.getByEmail(user);
    errors(getByEmail);
    const verify = await bcryptjs.compare(user.password, getByEmail.password);
    errors(verify);
    return res.status(200).send({ message: 'Login successful' });
  } catch (err) {
    console.log(err.message);
    console.log();
    res.status(err.status).send(err.message);
  }
};

export const create = async (req, res) => {
  try {
    const service = new userService();
    const user = req.body;
    user.password = await bcryptjs.hash(user.password, 10);
    console.log(user);
    const userEntity = new UserEntity(user);
    await userEntity.createId(service.getById);
    const createdUser = await service.create(userEntity.printUSer());
    errors(createdUser);
    return res.status(201).send(createdUser);
  } catch (err) {
    console.log(err.message);
    res.status(err.status).send(err.message);
  }
};
