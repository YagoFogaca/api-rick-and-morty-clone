import { randomUUID } from 'node:crypto';

export class UserEntity {
  constructor(user) {
    this.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo;
  }
  async createId(getById) {
    while (true) {
      const random = randomUUID();
      const idUser = random.substring(0, 7);
      const getId = await getById(idUser);
      if (!getId) {
        console.log(idUser);
        this.id = idUser;
        return idUser;
      }
    }
  }
  printUSer() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      photo: this.photo,
    };
  }
}
