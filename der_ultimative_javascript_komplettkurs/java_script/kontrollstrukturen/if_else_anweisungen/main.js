"use strict";
/*
Grundgerüst
if () {

}
else {

}
-----------------------------------------------------------------------
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
}
else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}


//Prüfung auf volljährigkeit
let benutzer_eingabe = 19;
const min_alter = 18

// >= größer oder gleich
if (benutzer_eingabe >= min_alter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
  }
*/

//Prüfung ob jünger, älter oder genau 18 Jahre alt
const min_alter = 18
let benutzer_eingabe = 19;

// >= größer oder gleich
if (benutzer_eingabe >= min_alter) {
    if(benutzer_eingabe == min_alter) {
        console.log ("Du bist gerade alt genug!");
    }  else {
        console.log("Du bist alt genug!");
    }
}  else {
    console.log("Du bist noch nicht alt genug!");
}
