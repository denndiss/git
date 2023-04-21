"use strict";

/* const my_function = function (parameter_1, parameter_2) {
 -> hier auszuführender Code
 }
 
 my_function(p1, p2);
*/

const log_die_zahl = function(a) {
    console.log(a);
}

log_die_zahl (38);


const begruessung = function(vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}
schön Dich zu sehen.`);
};

let v = "Deniz";
let n = "Sezer";

begruessung ("Deniz", "Sezer");
begruessung (v, n);


//übungsaufgabe
const rechnungen = function (x, y) {
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
};

let z1 = 23;
let z2 = 54;
let z3 = 99;
let z4 = 77;
let z5 = 5;

rechnungen(z1, z5);
rechnungen(z4, z2);
rechnungen(z3, z2);
rechnungen(z5, z2);
rechnungen(z5, z5);