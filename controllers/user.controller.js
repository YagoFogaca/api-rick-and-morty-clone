import { userService } from '../services/user.service.js';
import { UserEntity } from '../entities/user.entity.js';

export const getAll = async () => {
  const service = new userService();
  const getAll = await service.getAll();
  if (!getAll || getAll.length === 0) return 'Nenhum personagem foi encontrado';
  return getAll;
};
