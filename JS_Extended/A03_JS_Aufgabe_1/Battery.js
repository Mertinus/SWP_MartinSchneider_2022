export default class Battery {
    constructor(chargingStatus = 100) {
        if(chargingStatus > 100)
            this.chargingStatus = 100;
        else if(chargingStatus < 0)
            this.chargingStatus = 0;
        else 
            this.chargingStatus = chargingStatus;
    }
}