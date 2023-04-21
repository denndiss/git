"use strict";

// Gültigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat

// Globale Variablen: wird außerhalb aller codeblöcke definiert und ist von überall zugänglich
// Lokale Variablen: wird innerhalb eines codeblocks definiert und ist nur in diesem verfügbar

let variable_1 = "Variable 1"; // globale Variable

const meine_function = function() { 
    let variable_2 = "Variable 2"; // lokale Variable
    console.log(variable_1);
    console.log(variable_2);
};

meine_function();

console.log(variable_1);
console.log(variable_2); // hier ist variable_2 außerhalb des gültigkeitsbereichs