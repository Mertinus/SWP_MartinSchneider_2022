//Aufgabe 1 Variablen und Operationen
let a = 7;
let b = 8;
let c = 10;

PrintResult(a + b + c);
PrintResult((a + b) / c);
PrintResult(c - a + b);
PrintResult(a + b + c * 3);
PrintResult((a + b + c) / 4);

a=3;
b=a+3;
c=c-3;
console.log("Wert a ist "+a);
console.log("Wert b ist "+b);
console.log("Wert c ist "+c);

function PrintResult(r) {
    console.log("Das Ergebnis ist "+r);
}

//Aufgabe 2 Strings und Zahlen
a = 17.4;
b = 3.9;
console.log("The result of " + a + " divided by " + b + " is " + (a / b));

let firstname = "Martin";
let lastname = "Schneider";
console.log("Ich heiße " + firstname + " " + lastname);

//Aufgabe 3 zu Variablen
let banana = "Banane";
let apple = "Apple";
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let bananaAvgWeight = 0.22;
let appleAvgWeight = 0.34;

let bananasPerKilo = 1 / bananaAvgWeight;
console.log("Anzahl Bananen pro Kilo: " + Math.floor(bananasPerKilo));
let pricePerBanana = bananaPricePerKilo / bananasPerKilo;
console.log("Preis pro Banane: " + pricePerBanana);

let applesPerKilo = 1 / appleAvgWeight;
console.log("Anzahl Äpfel pro Kilo: " + Math.floor(applesPerKilo));
let pricePerApple = applePricePerKilo / applesPerKilo;
console.log("Preis pro Apfel: " + pricePerApple);

console.log("Preis von 8 Äpfeln: " + (pricePerApple * 8));
console.log("Preis von 17 Bananen: " + (pricePerBanana * 17));
console.log("Preis von 1 Tonne Äpfel: " + (applePricePerKilo * 1000));
console.log("Preis von 1 Tonne Bananen: " + (bananaPricePerKilo * 1000));