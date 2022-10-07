let rndNum1 = Math.round(Math.random() * 100);
let rndNum2 = Math.round(Math.random() * 100);
console.log("Num1: " + rndNum1 + " Num2: " + rndNum2);

if (rndNum1 < rndNum2 && rndNum1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
if (rndNum1 < 30 || rndNum2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}
if (rndNum1 < 50 && rndNum1 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}

//1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist 
//   oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist. 

//2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen 
//   Elternteil mit dabei hat.

//3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den 
//   Coding Campus besucht haben oder bereits 2 Jahre Berufserfahrung vorweisen. 

//4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 
//   5 Jahre Erfahrung vorweist oder einen Master Abschluss besitzt und auf 
//   jeden Fall eine einwandfreies Leumundszeugnis besitzt
