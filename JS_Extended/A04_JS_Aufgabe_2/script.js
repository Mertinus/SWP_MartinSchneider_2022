import Aeroplane from "./Aeroplane.js";

let a1 = new Aeroplane();

a1.PrintFlightPosition();

a1.Up(5);
a1.Down(3);
a1.Left(10);
a1.Right(15);

a1.PrintFlightPosition();

a1.PrintTurbineSpeed();
a1.Accelerate(10);
a1.PrintTurbineSpeed();