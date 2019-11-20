import express from "express";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import cupcakeOptions from "./fixtures/cupcake-options";
import Order from "./types/Order";

const adapter = new FileSync(
  process.env.NODE_ENV === "test" ? "test.json" : "db.json"
);
const db = low(adapter);
const app = express();

app.use(express.json());
db.defaults({ ...cupcakeOptions, orders: [] }).write();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

const entities = ["frostings", "bases", "toppings", "orders"];

entities.forEach((entity: string) => {
  app.get(`/cupcakes/${entity}`, (req, res) => {
    const records = db.get(entity).value();
    res.send({ [entity]: records });
  });
});

app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/cupcakes/orders", (req, res) => {
  const { cupcakes, delivery_date } = req.body.order;

  try {
    const order = new Order(delivery_date, cupcakes);
    db.get("orders")
      .push(order)
      .write();
    res.send({ id: order.id });
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

module.exports = app;
