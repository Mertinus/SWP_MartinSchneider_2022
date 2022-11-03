import Remote from "./Remote.js";

let r1 = new Remote();

r1.GetStatus();
r1.TurnOn();
r1.GetStatus();
r1.TurnOn();
r1.TurnOff();
r1.HasPower();

for(let i = 0; i < 10; i++) {
    r1.TurnOn();
    r1.TurnOff();
}
r1.HasPower();