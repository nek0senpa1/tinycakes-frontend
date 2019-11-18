import Frosting from "Frosting";
import Topping from "Topping";
import Base from "Base";

export default interface Cupcake {
  frosting: Frosting;
  toppings: Array<Topping>;
  base: Base;
}
