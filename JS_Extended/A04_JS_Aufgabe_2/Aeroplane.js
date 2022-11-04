import Turbine from './Turbine.js';
import Tank from './Tank.js';
import Elevator from './Elevator.js';
import SideRudder from './SideRudder.js';

export default class Aeroplane {
    constructor() {
        this.turbines = [new Turbine(), new Turbine(), new Turbine(), new Turbine()];
        this.tank = new Tank(100);
        this.elevator = new Elevator();
        this.sideRudder = new SideRudder();
    }

    Accelerate(speed) {
        //this.tank.level = this.tank.capacity;
        this.turbines.forEach(element => {
            element.Accelerate(speed);
            this.tank.DecreaseFuelLevel(element.GetIntensity());
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

    PrintFuelStatusAndIntensity() {
        console.log("Tank-level is " + this.tank.GetStatus());
        this.turbines.forEach(element => {
            console.log("Intensity is " + element.GetIntensity());
        });        
    }
    
    PrintFlightPosition() {
        console.log("Vertical angle: " + this.elevator.GetStatus() + " - Horizontal angle: " + this.sideRudder.GetStatus());
    }
}