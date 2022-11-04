export default class SideRudder {
    constructor(startAngle = 0) {
        this.angle = startAngle;
    }

    Move(angle) {
        this.angle += angle;
    }

    GetStatus() {
        return this.angle;
    }
}