"use strict";
const input = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log(sum(Number(input.value), Number(input2.value)));
});
