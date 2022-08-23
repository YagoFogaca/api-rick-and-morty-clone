import { userService } from '../services/user.service.js';
import { UserEntity } from '../entities/user.entity.js';

export const getAll = async () => {
  const service = new userService();
  const getAll = await service.getAll();
  if (!getAll || getAll.length === 0) return 'Nenhum usuario foi encontrado';
  return getAll;
};

export const create = async (user) => {
  const service = new userService();
  const userEntity = new UserEntity(user);
  await userEntity.createId(service.getById);
  const newUser = userEntity.printUSer();
  return await service.create(newUser);
};
