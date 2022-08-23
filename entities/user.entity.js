import { randomUUID } from 'node:crypto';

export class UserEntity {
  constructor(user) {
    this.id;
    this.name = user.name;
    this.username = user.userName;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
  }
  createId() {
    const random = randomUUID();
    const idUser = random.substring(0, 7);
    this.id = idUser;
    return idUser;
  }
  printUSer() {
    return {
      id: this.id,
      name: this.name,
      username: this.userName,
      email: this.email,
      password: this.password,
      image: this.image,
    };
  }
}
