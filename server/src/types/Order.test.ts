import Order from "./Order";
import cupcakeOptions from "../fixtures/cupcake-options";

const cupcake = {
  frosting: cupcakeOptions.frostings[0],
  base: cupcakeOptions.bases[0],
  toppings: [cupcakeOptions.toppings[0]]
};
const dateStr = new Date().toString();
const cupcakeArray = [cupcake];

describe("Order", () => {
  it("should instantiate itself with a date and an array of cupcakes", () => {
    const order = new Order(dateStr, cupcakeArray);
    expect(order.delivery_date).toEqual(new Date(dateStr));
    expect(order.cupcakes).toEqual([cupcake]);
  });

  it("should error if delivery_date is not a Date", () => {
    expect(() => {
      // @ts-ignore
      const order = new Order("foo", [cupcake]);
    }).toThrow();
  });

  it("should error if delivery_date is not defined", () => {
    expect(() => {
      // @ts-ignore
      const order = new Order();
    }).toThrow();
  });

  it("should error if cupcakes is not an array of Cupcakes", () => {
    expect(() => {
      // @ts-ignore
      const order = new Order(date, ["foo"]);
    }).toThrow();
  });

  it("should error if cupcakes is not defined", () => {
    expect(() => {
      // @ts-ignore
      const order = new Order(date);
    }).toThrow();
  });
});
