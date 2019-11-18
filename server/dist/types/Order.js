"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniqid_1 = __importDefault(require("uniqid"));
class Order {
    constructor(delivery_date, cupcakes) {
        this.id = uniqid_1.default();
        this.delivery_date = new Date(delivery_date);
        this.cupcakes = cupcakes;
        if (!Array.isArray(cupcakes))
            throw new Error("cupcakes must be an array");
        if (!cupcakes)
            throw new Error("cupcakes must be defined");
        if (!delivery_date)
            throw new Error("delivery date must be defined");
        cupcakes.forEach(cupcake => {
            if (!isCupcake(cupcake))
                throw new Error("cupcakes must be an array of Cupcakes");
        });
        if (isNaN(this.delivery_date.getMonth()))
            throw new Error("delivery_date must be a Date-parsable string");
    }
}
exports.default = Order;
function isCupcake(obj) {
    return (obj.frosting !== undefined &&
        obj.toppings !== undefined &&
        obj.base !== undefined &&
        Array.isArray(obj.toppings));
}
//# sourceMappingURL=Order.js.map