import { randomUUID } from 'node:crypto';

export class CharacterEntity {
  constructor(character, user) {
    this.id;
    this.user = user.user ?? '';
    this.name = character.name;
    this.imageUrl = character.imageUrl;
  }
  async createId(getById) {
    while (true) {
      const random = randomUUID();
      const idCharacter = random.substring(0, 7);
      const getId = await getById(idCharacter);
      if (!getId) {
        this.id = idCharacter;
        return idCharacter;
      }
    }
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
