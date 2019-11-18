"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chocolateBase = {
    key: "chocolateBase",
    name: "Chocolate Base",
    price: 75,
    ingredients: ["chocolate cake"]
};
const vanillaBase = {
    key: "vanillaBase",
    name: "Vanilla Base",
    price: 50,
    ingredients: ["vanilla cake"]
};
const lemonBarBase = {
    key: "lemonBase",
    name: "Lemon Bar Base",
    price: 64,
    ingredients: ["lemon bar"]
};
const redVelvetBase = {
    key: "redVelvetBase",
    name: "Red Velvet Base",
    price: 100,
    ingredients: ["red velvet cake"]
};
const peanutButterBase = {
    key: "peanutButterBase",
    name: "Peanut Butter Base",
    price: 85,
    ingredients: ["peanut butter cup cake"]
};
const vanillaFrosting = {
    key: "vanillaFrosting",
    name: "Vanilla Frosting",
    price: 15,
    ingredients: ["vanilla frosting"]
};
const chocolateFrosting = {
    key: "chocolateFrosting",
    name: "Chocolate Frosting",
    price: 35,
    ingredients: ["chocolate frosting"]
};
const redVelvetFrosting = {
    key: "redVelvetFrosting",
    name: "Red Velvet Frosting",
    price: 50,
    ingredients: ["red velvet frosting"]
};
const espressoButtercreamFrosting = {
    key: "espressoButtercreamFrosting",
    name: "Espresso Buttercream Frosting",
    price: 75,
    ingredients: ["buttercream"]
};
const sprinkles = {
    key: "sprinkles",
    name: "Sprinkles",
    price: 10,
    ingredients: ["sprinkles"]
};
const coconutFlakes = {
    key: "coconutFlakes",
    name: "Coconut Flakes",
    price: 15,
    ingredients: ["coconut flakes"]
};
const gummyBears = {
    key: "gummyBears",
    name: "Gummy Bears",
    price: 25,
    ingredients: ["gummy bear"]
};
const chocolateChips = {
    key: "chocolateChips",
    name: "Chocolate Chips",
    price: 50,
    ingredients: ["chocolate chips"]
};
const strawberries = {
    key: "strawberries",
    name: "Strawberries",
    price: 15,
    ingredients: ["strawberries"]
};
const cocoaPowder = {
    key: "cocoaPowder",
    name: "Cocoa Powder",
    price: 5,
    ingredients: ["cocoa powder"]
};
const cupcakeOptions = {
    bases: [
        peanutButterBase,
        lemonBarBase,
        chocolateBase,
        vanillaBase,
        redVelvetBase
    ],
    frostings: [
        vanillaFrosting,
        espressoButtercreamFrosting,
        chocolateFrosting,
        redVelvetFrosting
    ],
    toppings: [
        sprinkles,
        coconutFlakes,
        strawberries,
        gummyBears,
        chocolateChips,
        cocoaPowder
    ]
};
exports.default = cupcakeOptions;
module.exports = cupcakeOptions;
//# sourceMappingURL=cupcake-options.js.map