"use strict";

//Der default Wert
// (Wert der benutzt wird wenn kein parameter übergeben wurde)
// ist hinter dem =

const multiplizieren = function (x = 0, y = 10) {
    console.log(x);
    console.log(y);
    console.log(x * y);
};

let z1 = 42
let z2 = 20

multiplizieren(z1);

//Übungsaufgabe
const hellseher = function (x = "Max", y = "Mustermann", z = 18) {
    console.log(`Hallo ${x} ${y}! Du bist ${z} Jahre alt!`);
};

let v = "Deniz";
let n = "Sezer";
let alter = 37;

hellseher();
hellseher(v);
hellseher(v, n);
hellseher(v, undefined, alter);
hellseher(v, n, alter);

