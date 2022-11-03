import Car from './Car.js';
import {Person, Animal} from './Person.js';
import SuperCar from './SuperCar.js';

let c1 = new Car("red", "BMW");
c1.PrintCar();
let p1 = new Person("Martin", 18);
p1.PrintPerson();
let a1 = new Animal();
a1.PrintAnimal();
let s1 = new SuperCar();
s1.PrintCar();
s1.SuperCarAccelerate();