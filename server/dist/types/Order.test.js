"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
const cupcake_options_1 = __importDefault(require("../fixtures/cupcake-options"));
const cupcake = {
    frosting: cupcake_options_1.default.frostings[0],
    base: cupcake_options_1.default.bases[0],
    toppings: [cupcake_options_1.default.toppings[0]]
};
const dateStr = new Date().toString();
const cupcakeArray = [cupcake];
describe("Order", () => {
    it("should instantiate itself with a date and an array of cupcakes", () => {
        const order = new Order_1.default(dateStr, cupcakeArray);
        expect(order.delivery_date).toEqual(new Date(dateStr));
        expect(order.cupcakes).toEqual([cupcake]);
    });
    it("should error if delivery_date is not a Date", () => {
        expect(() => {
            // @ts-ignore
            const order = new Order_1.default("foo", [cupcake]);
        }).toThrow();
    });
    it("should error if delivery_date is not defined", () => {
        expect(() => {
            // @ts-ignore
            const order = new Order_1.default();
        }).toThrow();
    });
    it("should error if cupcakes is not an array of Cupcakes", () => {
        expect(() => {
            // @ts-ignore
            const order = new Order_1.default(date, ["foo"]);
        }).toThrow();
    });
    it("should error if cupcakes is not defined", () => {
        expect(() => {
            // @ts-ignore
            const order = new Order_1.default(date);
        }).toThrow();
    });
});
//# sourceMappingURL=Order.test.js.map