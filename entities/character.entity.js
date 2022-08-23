import { randomUUID } from 'node:crypto';

export class CharacterEntity {
  constructor(character, user) {
    this.id;
    this.user = user.userName;
    this.name = character.name;
    this.image = character.image;
  }
  createId() {
    const random = randomUUID();
    const idUser = random.substring(0, 7);
    this.id = idUser;
    return idUser;
  }
  printCharacter() {
    return {
      id: this.id,
      user: this.userName,
      name: this.name,
      image: this.image,
    };
  }
}
