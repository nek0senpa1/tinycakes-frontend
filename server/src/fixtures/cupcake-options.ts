import Base from "../types/Base";
import Frosting from "../types/Frosting";
import Topping from "../types/Topping";

const chocolateBase: Base = {
  key: "chocolateBase",
  name: "Chocolate Base",
  price: 75,
  ingredients: ["chocolate cake"]
};

const vanillaBase: Base = {
  key: "vanillaBase",
  name: "Vanilla Base",
  price: 50,
  ingredients: ["vanilla cake"]
};

const lemonBarBase: Base = {
  key: "lemonBase",
  name: "Lemon Bar Base",
  price: 64,
  ingredients: ["lemon bar"]
};

const redVelvetBase: Base = {
  key: "redVelvetBase",
  name: "Red Velvet Base",
  price: 100,
  ingredients: ["red velvet cake"]
};

const peanutButterBase: Base = {
  key: "peanutButterBase",
  name: "Peanut Butter Base",
  price: 85,
  ingredients: ["peanut butter cup cake"]
};

const vanillaFrosting: Frosting = {
  key: "vanillaFrosting",
  name: "Vanilla Frosting",
  price: 15,
  ingredients: ["vanilla frosting"]
};

const chocolateFrosting: Frosting = {
  key: "chocolateFrosting",
  name: "Chocolate Frosting",
  price: 35,
  ingredients: ["chocolate frosting"]
};

const redVelvetFrosting: Frosting = {
  key: "redVelvetFrosting",
  name: "Red Velvet Frosting",
  price: 50,
  ingredients: ["red velvet frosting"]
};

const espressoButtercreamFrosting: Frosting = {
  key: "espressoButtercreamFrosting",
  name: "Espresso Buttercream Frosting",
  price: 75,
  ingredients: ["buttercream"]
};

const sprinkles: Topping = {
  key: "sprinkles",
  name: "Sprinkles",
  price: 10,
  ingredients: ["sprinkles"]
};

const coconutFlakes: Topping = {
  key: "coconutFlakes",
  name: "Coconut Flakes",
  price: 15,
  ingredients: ["coconut flakes"]
};

const gummyBears: Topping = {
  key: "gummyBears",
  name: "Gummy Bears",
  price: 25,
  ingredients: ["gummy bear"]
};

const chocolateChips: Topping = {
  key: "chocolateChips",
  name: "Chocolate Chips",
  price: 50,
  ingredients: ["chocolate chips"]
};

const strawberries: Topping = {
  key: "strawberries",
  name: "Strawberries",
  price: 15,
  ingredients: ["strawberries"]
};

const cocoaPowder: Topping = {
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

export default cupcakeOptions;

module.exports = cupcakeOptions;
