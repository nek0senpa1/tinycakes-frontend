import Cupcake from "Cupcake";
import uniqid from "uniqid";

export default class Order {
  cupcakes: Array<Cupcake>;
  delivery_date: Date;
  id: string;

  constructor(delivery_date: string, cupcakes: Array<Cupcake>) {
    this.id = uniqid();
    this.delivery_date = new Date(delivery_date);
    this.cupcakes = cupcakes;

    if (!Array.isArray(cupcakes)) throw new Error("cupcakes must be an array");
    if (!cupcakes) throw new Error("cupcakes must be defined");
    if (!delivery_date) throw new Error("delivery date must be defined");
    cupcakes.forEach(cupcake => {
      if (!isCupcake(cupcake))
        throw new Error("cupcakes must be an array of Cupcakes");
    });

    if (isNaN(this.delivery_date.getMonth()))
      throw new Error("delivery_date must be a Date-parsable string");
  }
}

function isCupcake(obj: any): obj is Cupcake {
  return (
    obj.frosting !== undefined &&
    obj.toppings !== undefined &&
    obj.base !== undefined &&
    Array.isArray(obj.toppings)
  );
}
