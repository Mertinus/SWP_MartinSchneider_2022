//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren)
for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("X X X X");
    }
    else {
        console.log("O O O O");
    }
}

//Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ 
//Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 
let sum = 0;
for (let i = 2; i <= 100; i+=2) {
    sum += i;
    console.log(i);
}
console.log(sum);

//Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben
for (let row = 0; row < 5; row++) {
    let line = "";
    for (let col = 0; col < 5; col++) {
        if (col == 0 || col == 4 ||
            (row == 1 && col == 1) || 
            (row == 1 && col == 3) || 
            (row == 2 && col == 2)) {
            line += " X ";
        }
        else {
            line += "   ";
        }
    }
    console.log(row + " " + line);
}