"use strict";
/*
Grundgerüst
if () {

}
-----------------------------------------------------------------------
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
}

if (true) {
    console.log("if wurde ausgeführt!");
}

if (false) {
    console.log("if wurde ausgeführt!");
}

if (10>20) {
    console.log("If wurde ausgeführt!");
}

if (10 < 20 && 10 < 30) {
    console.log("If wurde ausgeführt!");
}
*/

//Prüfung auf volljährigkeit mit prompt
let benutzer_eingabe = prompt ("wie alt bist du?");
const min_alter = 18

// >= größer oder gleich
if (benutzer_eingabe >= min_alter) {
    console.log("Du bist alt genug!")
}