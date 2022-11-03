import Battery from "./Battery.js";

export default class Remote {
    constructor() {
        this.battery1 = new Battery();
        this.battery2 = new Battery();
        this.isOn = false;
    }

    GetStatus() {
        let status1 = this.battery1.chargingStatus;
        let status2 = this.battery2.chargingStatus;
        let s = Math.floor((status1 + status2) / 2);
        console.log(s);
        return s;
    }

    HasPower() {
        if(this.GetStatus() > 50)
            console.log("Power above 50%");
        else
            console.log("Power below 50%");
    }

    TurnOn() {
        if(!this.isOn) {
            this.battery1.chargingStatus -= 5;
            this.battery2.chargingStatus -= 5;
        }
        this.isOn = true;
    }

    TurnOff() {
        this.isOn = false;
    }
}