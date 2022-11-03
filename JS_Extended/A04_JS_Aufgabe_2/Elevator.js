export default class Elevator {
    constructor(startAngle = 0) {
        this.angle = startAngle;
    }

    Move(angle) {
        this.angle += angle;
    }
}