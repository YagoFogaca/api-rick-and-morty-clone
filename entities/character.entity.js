import { randomUUID } from 'node:crypto';

export class CharacterEntity {
  constructor(character, user) {
    this.id;
    this.user = user.username;
    this.name = character.name;
    this.imageUrl = character.imageUrl;
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
      user: this.user,
      name: this.name,
      imageUrl: this.imageUrl,
    };
  }
}
