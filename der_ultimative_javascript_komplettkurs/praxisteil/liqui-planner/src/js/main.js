"use strict";

//Gesamtbilanz anlegen
let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

//Eingabedaten holen
let titel_1 = prompt ("Titel:");
let typ_1 = prompt ("Typ (Einnahme oder Ausgabe):");

//parseInt() convert ein string in eine number (also in ein integer)
let betrag_1 = parseInt(prompt ("Betrag (in Cent):"));
let datum_1 = prompt ("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_1}
Typ: ${typ_1}
Betrag: ${betrag_1} Cent
Datum: ${datum_1}`
);


if(typ_1 === "Einnahme") {
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;

} else if (typ_1 === "Ausgabe") {
    ausgaben = ausgaben + betrag_1
    bilanz = bilanz - betrag_1
} else {
    console.log(`Der Typ "${typ_1}", ist mir nicht bekannt!`);
}

let titel_2 = prompt ("Titel:");
let typ_2 = prompt ("Typ (Einnahme oder Ausgabe):");

//parseInt Converts a string to an integer.
let betrag_2 = parseInt(prompt("Betrag (in Cent):"));
let datum_2 = prompt ("Datum2 (jjjj-mm-tt):");

console.log(`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2} Cent
Datum: ${datum_2}`
);

if(typ_2 === "Einnahme") {
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;

} else if (typ_2 === "Ausgabe") {
    ausgaben = ausgaben + betrag_2
    bilanz = bilanz - betrag_2
} else {
    console.log(`Der Typ "${typ_2}", ist mir nicht bekannt!`);
}


//Gesamtbilanz ausgeben
let positiv = bilanz >= 0;

console.log(`Einnahmen: ${einnahmen} Cent
Ausgaben: ${ausgaben} Cent
Bilanz: ${bilanz} Cent
Bilanz ist positiv: ${positiv}`
);