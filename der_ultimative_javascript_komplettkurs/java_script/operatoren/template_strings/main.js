"use strict";

let vorname = "Deniz";
let nachname = "Sezer";
let alter = 37;

let fullname = vorname + " " + nachname;
console.log(fullname);

//template string
let begruessung = `Hallo ${fullname}!`;
console.log(begruessung);

let all_info = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(all_info);

//mehrzeilige template strings
let mehrzeiliger_template_strings = `Hallo ${vorname}!
Du bist ${alter} Jahre alt.
wie geht es dir?`;
console.log(mehrzeiliger_template_strings);

//konkatinierte template string in einer Zeile
let konkatinierte_template_string_2 = `Hallo ${vorname}! ` +
`Du bist ${alter} Jahre alt. ` +
`Wie geht es dir?`;
console.log(konkatinierte_template_string_2);

