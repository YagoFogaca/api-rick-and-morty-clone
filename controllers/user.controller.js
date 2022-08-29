import { userService } from '../services/user.service.js';
import { UserEntity } from '../entities/user.entity.js';
import { errors } from './errors/erroController.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const getAll = async (req, res) => {
  try {
    const service = new userService();
    const getAll = await service.getAll();
    errors(getAll);
    return res.status(200).send(getAll);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err.message);
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
    const token = jwt.sign({ getByEmail }, process.env.SECRET, {
      expiresIn: '12h',
    });
    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
};

export const create = async (req, res) => {
  try {
    const service = new userService();
    const user = req.body;
    user.password = await bcryptjs.hash(user.password, 10);
    const userEntity = new UserEntity(user);
    await userEntity.createId(service.getById);
    const createdUser = await service.create(userEntity.printUSer());
    errors(createdUser);
    return res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};
