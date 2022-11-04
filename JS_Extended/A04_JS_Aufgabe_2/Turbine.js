export default class Turbine {
    constructor(speed = 0) {
        this.Accelerate(speed);
    }

    Accelerate(speed) {
        this.intensity = speed / 80.0;
    }

    GetIntensity() {
        return this.intensity;
    }
}