"use strict";

//Info: Code nach einer Return Anweisung,
//wird nicht mehr ausgeführt
const multi = function(a, b){
    return a * b;
};

let z_1= 2;
let z_2= 3;

let ergebnis_1 = multi(z_1, z_2);
console.log(ergebnis_1);
console.log(multi(z_1, z_2));   //das selbe in kurz

let ergebnis_2=multi(ergebnis_1, ergebnis_1);
let ergebnis_3=multi(multi(z_1, z_2), multi(z_1, z_2));

console.log(ergebnis_2);
console.log(ergebnis_3);
console.log(multi(multi(z_1, z_2), multi(z_1, z_2)));//das selbe in kurz

let ergebnis_4=multi(multi(multi(z_1, z_2), multi(z_1, z_2)), multi(multi(z_1, z_2), multi(z_1, z_2)))
console.log(ergebnis_4);

//besser und kürzer (statt let ergebnis_4)
console.log(multi(multi(multi(z_1, z_2), multi(z_1, z_2)), multi(multi(z_1, z_2), multi(z_1, z_2))));