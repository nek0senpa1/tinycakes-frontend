"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
const cupcake_options_1 = __importDefault(require("./fixtures/cupcake-options"));
const Order_1 = __importDefault(require("./types/Order"));
const adapter = new FileSync_1.default(process.env.NODE_ENV === "test" ? "test.json" : "db.json");
const db = lowdb_1.default(adapter);
const app = express_1.default();
app.use(express_1.default.json());
db.defaults(Object.assign({}, cupcake_options_1.default, { orders: [] })).write();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const entities = ["frostings", "bases", "toppings", "orders"];
entities.forEach((entity) => {
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
        const order = new Order_1.default(delivery_date, cupcakes);
        db.get("orders")
            .push(order)
            .write();
        res.send({ id: order.id });
    }
    catch (e) {
        res.status(500).send(e.toString());
    }
});
module.exports = app;
//# sourceMappingURL=app.js.map