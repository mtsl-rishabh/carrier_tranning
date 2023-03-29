"use strict";
let type;
function combine1(a, b, type) {
    if (type === 'as-number') {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine1(20, 10, "as-number"));
console.log(combine1("Rih", "Rathaur", 'as-string'));
