"use strict";

/*zuweisung
 *let test = xy;
*/

//////////////Zahlen Vergleichen//////////////

//vergleichsoperator
console.log("ist 42 gleich 42?");
console.log(42 == 42);
console.log("ist 42 gleich 43?");
console.log(42 == 43);
console.log("ist 43 gleich 42?");
console.log(43 == 42);
console.log("-----------------------------------")

//ungleich vergleichsoperator
console.log("ist 42 ungleich 42?");
console.log(42 != 42);
console.log("ist 42 ungleich 43?");
console.log(42 != 43);
console.log("ist 43 ungleich 42?");
console.log(43 != 42);
console.log("-----------------------------------")

//groeser als vergleichsoperator
console.log("ist 42 groeser als 42?");
console.log(42 > 42);
console.log("ist 42 groeser als 43?");
console.log(42 > 43);
console.log("ist 43 groeser als 42?");
console.log(43 > 42);
console.log("-----------------------------------")

//kleiner als vergleichsoperator
console.log("ist 42 kleiner als 42?");
console.log(42 < 42);
console.log("ist 42 kleiner als 43?");
console.log(42 > 43);
console.log("ist 43 kleiner als 42?");
console.log(43 > 42);
console.log("-----------------------------------")

//groeser oder gleich vergleichsoperator
console.log("ist 42 groeser oder gleich 42?");
console.log(42 >= 42);
console.log("ist 42 groeser oder gleich 43?");
console.log(42 >= 43);
console.log("ist 43 groeser oder gleich 42?");
console.log(43 >= 42);
console.log("-----------------------------------")

//kleiner oder gleich vergleichsoperator
console.log("ist 42 kleiner oder gleich 42?");
console.log(42 <= 42);
console.log("ist 42 kleiner oder gleich 43?");
console.log(42 <= 43);
console.log("ist 43 kleiner oder gleich 42?");
console.log(43 <= 42);
console.log("-----------------------------------")


//Strings vergleichen (asci tabelle Achtung!)
console.log("K"=="k");
console.log("K">"k");
console.log("K"<"k");
console.log("K"<"L");

console.log("Deniz" == "Deniz");
console.log("Deniz" == "Deniz Sezer");
console.log("Deniz" == "DENIZ");
console.log("-----------------------------------")

console.log("Deniz" != "Deniz");
console.log("Deniz" != "Deniz Sezer");
console.log("Deniz" != "DENIZ");
console.log("-----------------------------------")

console.log("Deniz" < "Deniz");
console.log("Deniz" < "Deniz Sezer");
console.log("Deniz" < "DENIZ");
console.log("-----------------------------------")

console.log("Deniz" > "Deniz");
console.log("Deniz" > "Deniz Sezer");
console.log("Deniz" > "DENIZ");
console.log("Anton" > "Juli" );
console.log("-----------------------------------")

console.log("Deniz" <= "Deniz");
console.log("Deniz" <= "Deniz Sezer");
console.log("Deniz" <= "DENIZ");
console.log("-----------------------------------")

console.log("Deniz" >= "Deniz");
console.log("Deniz" >= "Deniz Sezer");
console.log("Deniz" >= "DENIZ");
console.log("-----------------------------------")

//strikt gleich bzw. strikt ungleich
console.log("42" === 42);
console.log("42" !== 42);
console.log("-----------------------------------")
