"use strict";
let greet;
greet = () => {
    console.log('hello again');
};
const add = (a, b, c) => {
    console.log((a + b));
    console.log(c);
};
add(5, 10);
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
