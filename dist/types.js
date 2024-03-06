"use strict";
let isOpen;
isOpen = true;
let message;
message = `foo ${isOpen}`;
let total;
total = 43.23;
let items;
items = [1, 2, 3];
let title;
title = [1, 'foo'];
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
function logger() {
    console.log('foo');
}
let cart;
cart = {
    'key': '1',
};
// Type Inference
let msg2 = "Hello World";
