let monthDays = 31;
let startDay = 2;

let output = "";
let days = new Array("MO", "DI", "MI", "DO", "FR", "SA", "SO");

let dayCounter = -startDay + 1;
for (let row = 0; row < 6; row++) {
    let line = "";
    for (let col = 0; col < days.length; col++) {
        line += " | ";
        if (row == 0) {
            line += days[col];
        }
        else if ((dayCounter > 0 && dayCounter <= monthDays) &&
                  (col == 5 || col == 6)) {
            line += "WE";
            dayCounter++;
        }
        else if (dayCounter > 0 && dayCounter <= monthDays) {
            if (dayCounter < 10)
                line += " ";
            line += dayCounter;
            dayCounter++;
        }
        else {
            line += "  ";
            dayCounter++;
        }
    }
    output += line + "\n";
}
console.log(output);