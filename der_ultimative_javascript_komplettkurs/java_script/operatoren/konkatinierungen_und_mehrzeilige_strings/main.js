"use strict";

let vorname = "Deniz";
let nachname = "Sezer";
let alter = 37;

let name_1 = vorname + " " + nachname;

console.log(name_1);

/*
 *let begruessung = "Hallo " + vorname + " " + nachname + "!"; 
 *console.log(begruessung);
 *
 *kürzer/besser
*/
let begruessung = "Hallo " + name_1 + "!"; 
console.log(begruessung);

let zusammen = name_1 + " (" + alter + " Jahre)";
console.log(zusammen);

let einzeiliger_string = "Das ist ein einzeiliger String!";

// /n bedeutet new line /t bedeutet tab
let mehrzeiliger_string = "ich will diesen String " +
    "\nin der nächsten Zeile fortsetzen! " +
    "\nund wenn ich will, " +
    "\nkann es auch noch weitergehen. ";

console.log(einzeiliger_string);
console.log(mehrzeiliger_string);

let zusammen_2 = name_1 + " \n(" + alter + " Jahre)";
console.log(zusammen_2);

let mehrzeiliger_string_2 = "ich will diesen String " +
    "\n\tin der nächsten Zeile fortsetzen! " +
    "\n\t\tund wenn ich will, " +
    "\n\t\t\tkann es auch noch weitergehen. ";
console.log(mehrzeiliger_string_2);