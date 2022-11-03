import Turbine from './Turbine.js';
import Tank from './Tank.js';
import Elevator from './Elevator.js';
import SideRudder from './SideRudder.js';

export default class Aeroplane {
    constructor() {
        this.turbines = [new Turbine(), new Turbine(), new Turbine(), new Turbine()];
        this.tank = new Tank();
        this.elevator = new Elevator();
        this.sideRudder = new SideRudder();
    }

    Accelerate(speed) {
        this.turbines.forEach(element => {
            element.speed = speed;
        });
    }

    PrintTurbineSpeed() {
        this.turbines.forEach(element => {
            console.log("Speed is " +element.speed);
        });        
    }

    Up(angle) {
        this.elevator.Move(angle);
    }

    Down(angle) {
        this.elevator.Move(-angle);
    }

    Left(angle) {
        this.sideRudder.Move(angle);
    }

    Right(angle) {
        this.sideRudder.Move(-angle);
    }
    
    PrintFlightPosition() {
        console.log("Vertical angle: " + this.elevator.angle + " - Horizontal angle: " + this.sideRudder.angle);
    }

    GetFuelStatus() {

    }
}