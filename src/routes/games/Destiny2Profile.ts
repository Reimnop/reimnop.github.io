export class Destiny2Profile {
    name: string;
    code: string;
    profilePicture: string;
    id: string;
    characters: Destiny2Character[];

    constructor(name: string, code: string, profilePicture: string, id: string, characters: Destiny2Character[]) {
        this.name = name;
        this.code = code;
        this.profilePicture = profilePicture;
        this.id = id;
        this.characters = characters;
    }
}

export class Destiny2Character {
    name: string;
    light: number;
    playtime: number;
    emblem: string;

    constructor(name: string, light: number, playtime: number, emblem: string) {
        this.name = name;
        this.light = light;
        this.playtime = playtime;
        this.emblem = emblem;
    }
}