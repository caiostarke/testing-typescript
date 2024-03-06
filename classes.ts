class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`${this.name} is ${this.age} years old`)
        
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}

const kaer = new UserAccount('kaer', 1200);
kaer.logDetails()