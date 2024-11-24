import products from "./products";
let productName: string = "fanny pack";
// const product = products.find((el) => el.name === productName);

let product;
const regex = /[A-Z]/g;
for (let productItem of products) {
  if (productItem.name === productName) {
    product = productItem;
  }
}
console.log(product);

if (product.preorder === true) {
  console.log("We'll let you know when this item's on it's way");
}
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "575 Broadway, New York City, New York";

if (product.price >= 25) {
  shipping = 0;
  console.log("We provide free shipping for this product.");
} else {
  shipping = 5;
}

shippingAddress.match("New York") ? (taxPercent = 0.1) : (taxPercent = 0.05);

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`Reciept!\n\n`);
console.log(`${product.name}:\n`);
console.log(`Shipping to:\n${shippingAddress}\n`);
console.log(`Price: $${product.price}\nTax:$${taxTotal}\nShipping: $${shipping}\nTotal: $${total}`);

console.log("\n\n Thank you for shopping at TypeMart.")
