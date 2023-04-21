"use strict";

/* Diese dreier verschachtelung besser machen:
if (Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
}  else {

    if (Bedingung2) {
        Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
    }  else {

        if (Bedingung3) {
            Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
        }  else {
            Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
        }

    }

}
----------------------------------------------------------------------------------------

if (Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
} else if (Bedingung2) {
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
} else if (Bedingung3) {
    Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
*/

//Prüfung ob jünger, älter oder genau 18 Jahre alt
const min_alter = 18
let benutzer_eingabe = 17;

// >= größer oder gleich
// == ist gleich
if (benutzer_eingabe == min_alter) {
    console.log ("Du bist gerade alt genug!");
} else if (benutzer_eingabe > min_alter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
}