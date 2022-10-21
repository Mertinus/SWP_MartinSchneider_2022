export default class Car {
    horsepower = 100;

    constructor(color, brand, country = "Germany") {
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    PrintCar() {
        console.log(this.color + " - " + this.brand + " - " + this.country + " - " + this.horsepower);
    }
}