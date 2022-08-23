export class CharacterEntity {
    constructor(character, userName) {
        this.userName = userName.name;
        this.name = character.name;
        this.image = character.image;
    }
    printCharacter() {
        return {
            userName: this.userName,
            name: this.name,
            image: this.image,
        };
    }
}
