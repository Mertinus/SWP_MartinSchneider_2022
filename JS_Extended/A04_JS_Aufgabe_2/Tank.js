export default class Tank {
    constructor(capacity) {
        this.capacity = capacity;
        this.level = capacity;
    }

    GetStatus() {
        return this.level;
    }

    DecreaseFuelLevel(level) {
        this.level -= level;
    }
}