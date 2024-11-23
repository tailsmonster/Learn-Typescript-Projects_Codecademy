"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var dollarSigns = '$$';
var deliveryTimeMax = 90;
var maxDistance = 10;
var result;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurants_1.default.filter(function (restaurant) {
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (Number(restaurant.deliveryTimeMinutes) > deliveryTimeMax) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = "We found ".concat(filteredRestaurants.length, " restaurants, the first is ").concat(filteredRestaurants[0].name, ".");
}
console.log(result);
