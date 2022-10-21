export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    PrintPerson() {
        console.log(this.name + " - " + this.age);
    }
}

export class Animal{
    type = 'Dog';

    PrintAnimal() {
        console.log(this.type);
    }
}