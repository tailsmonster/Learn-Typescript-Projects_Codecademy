"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = "fanny pack";
// const product = products.find((el) => el.name === productName);
var product;
var regex = /[A-Z]/g;
for (var _i = 0, products_2 = products_1.default; _i < products_2.length; _i++) {
    var productItem = products_2[_i];
    if (productItem.name === productName) {
        product = productItem;
    }
}
console.log(product);
if (product.preorder === true) {
    console.log("We'll let you know when this item's on it's way");
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "575 Broadway, New York City, New York";
if (product.price >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
}
else {
    shipping = 5;
}
shippingAddress.match("New York") ? (taxPercent = 0.1) : (taxPercent = 0.05);
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("Reciept!\n\n");
console.log("".concat(product.name, ":\n"));
console.log("Shipping to:\n".concat(shippingAddress, "\n"));
console.log("Price: $".concat(product.price, "\nTax:$").concat(taxTotal, "\nShipping: $").concat(shipping, "\nTotal: $").concat(total));
console.log("\n\n Thank you for shopping at TypeMart.");
